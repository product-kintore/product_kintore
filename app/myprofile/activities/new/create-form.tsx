import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { Box, Button, FormControl, Paper, TextField, Typography, Alert, Snackbar } from "@mui/material"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { addActivity } from "@/app/lib/firebase"
import { useContext, useState } from "react"
import { UserContext } from "@/app/contexts/user-context"
import { useRouter } from "next/navigation"
import { DatePicker } from "@mui/x-date-pickers"

const schema = z.object({
  date: z.date(),
  title: z.string(),
  description: z.string(),
})

type Schema = z.infer<typeof schema>

export default function CreateForm() {
  const userContext = useContext(UserContext)
  const docId = userContext?.user?.uid || ""
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleErrorClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenError(false);
  };

  const { control, handleSubmit, formState: { errors } } = useForm<Schema>({
    defaultValues: {
      date: new Date(),
      title: "",
      description: "",
    },
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<Schema> = async (data) => {
    try {
      await addActivity(docId, data)
      setOpen(true);
      router.back();
    } catch (e) {
      setOpenError(true);
    }
  }

  return (
    <Paper elevation={1} sx={{ margin: 8, padding: 3 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <DatePicker
                label={"日付"}
                {...field}
                format="yyyy/MM/dd"
              />
            )}
          />
          {errors.date && <Typography color="error">日付を入力してください</Typography>}
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <TextField
                label={"参加したイベント名"}
                placeholder="PM"
                {...field}
                error={!!errors.title}
                required
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                label={"イベントの内容や感想"}
                multiline
                {...field}
                error={!!errors.description}
                required
              />
            )}
          />
        </FormControl>
        <Box textAlign={"center"}>
          <Button variant="contained" color="primary" type="submit">
            登録する
          </Button>
        </Box>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          プロフィールを更新しました！
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={6000} onClose={handleErrorClose}>
        <Alert onClose={handleErrorClose} severity="error" sx={{ width: '100%' }}>
          プロフィールの更新に失敗しました
        </Alert>
      </Snackbar>
    </Paper>
  )
}
