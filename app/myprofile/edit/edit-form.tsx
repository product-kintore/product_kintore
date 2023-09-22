import Select from "react-select"
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { Box, Button, FormControl, Paper, TextField, FormControlLabel, FormGroup, Typography, Checkbox, Alert, Snackbar } from "@mui/material"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { updateUser } from "@/app/lib/firebase"
import { useContext, useState } from "react"
import { UserContext } from "@/app/contexts/user-context"
import { useRouter } from "next/navigation"

const schema = z.object({
  company: z.string(),
  role: z.string(),
  experiencePeriod: z.number(),
  links: z.object({
    twitter: z.string().url().nullable(),
    note: z.string().url().nullable(),
  }).nullable(),
  selfIntroduction: z.string(),
  joinedBackground: z.object({
    collectingInformation: z.boolean(),
    connectingPeople: z.boolean(),
    other: z.boolean(),
    freeDesctiption: z.string().nullable(),
  }),
  interestedActivities: z.array(z.string()).min(1),
})

type Schema = z.infer<typeof schema>

const interestedActivitiesOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
]

export default function EditForm() {
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
      company: "",
      role: "",
      experiencePeriod: 0,
      links: null,
      selfIntroduction: "",
      joinedBackground: {
        collectingInformation: false,
        connectingPeople: false,
        other: false,
        freeDesctiption: null,
      },
      interestedActivities: [],
    },
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<Schema> = async (data) => {
    console.log(data)
    try {
      await updateUser(docId, data)
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
            name="company"
            control={control}
            render={({ field }) => (
              <TextField
                label="所属企業"
                placeholder="株式会社XXXX"
                {...field}
                error={!!errors.company}
                required
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <TextField
                label={"所属企業でのロール"}
                placeholder="PM"
                {...field}
                error={!!errors.role}
                required
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <Controller
            name="experiencePeriod"
            control={control}
            render={({ field }) => (
              <TextField
                label={"PM経験年数"}
                placeholder="3"
                type="number"
                {...field}
                error={!!errors.experiencePeriod}
                required
                onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <Controller
            name="selfIntroduction"
            control={control}
            render={({ field }) => (
              <TextField
                label={"自己紹介"}
                multiline
                {...field}
                error={!!errors.selfIntroduction}
                required
              />
            )}
          />
        </FormControl>
        <Box padding={1}>
          <Typography variant="body1" marginBottom={1} marginTop={1}>リンク</Typography>
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <Controller
              name="links.twitter"
              control={control}
              render={({ field }) => (
                <TextField
                  label={"Twitter"}
                  type="url"
                  {...field}
                  error={!!errors.links?.twitter}
                />
              )}
            />
          </FormControl>
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <Controller
              name="links.note"
              control={control}
              render={({ field }) => (
                <TextField
                  label={"Note"}
                  type="url"
                  {...field}
                  error={!!errors.links?.note}
                />
              )}
            />
          </FormControl>
        </Box>
        
        <Box padding={1}>
          <Typography variant="body1" marginBottom={1} marginTop={1}>入ったきっかけ</Typography>
          <FormGroup sx={{ marginBottom: 2 }}>
            <Controller
              name="joinedBackground.collectingInformation"
              control={control}
              render={({ field }) => <FormControlLabel control={<Checkbox {...field} />} label="情報収集" />}
            />
            <Controller
              name="joinedBackground.connectingPeople"
              control={control}
              render={({ field }) => <FormControlLabel control={<Checkbox {...field} />} label="横のつながり・交流" />}
            />
            <Controller
              name="joinedBackground.other"
              control={control}
              render={({ field }) => <FormControlLabel control={<Checkbox {...field} />} label="その他" />}
            />
            <Controller
              name="joinedBackground.freeDesctiption"
              control={control}
              render={({ field }) => <TextField label={"その他を選んだら書いてね"} multiline {...field} />}
            />
          </FormGroup>
        </Box>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <Controller
            name="interestedActivities"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={interestedActivitiesOptions}
                value={interestedActivitiesOptions.filter((option) => field.value.includes(option.value))}
                isMulti
                placeholder="興味のある活動"
                onChange={(options) => field.onChange(options.map((option) => option.value))}
              />
            )}
          />
          {errors.interestedActivities && <Typography color="error">興味のある活動を選択してください</Typography>}
        </FormControl>
        <Box textAlign={"center"}>
          <Button variant="contained" color="primary" type="submit">
            更新する
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
