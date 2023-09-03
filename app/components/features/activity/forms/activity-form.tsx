import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { DatePicker } from "@mui/x-date-pickers";
import { ActivityParams, ActivitySchema } from "@/app/types/schema";

type Props = {
  onSubmit: SubmitHandler<ActivityParams>;
  initialValues: ActivityParams;
};

export default function ActivityForm(props: Props) {
  const { onSubmit, initialValues } = props;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ActivityParams>({
    defaultValues: initialValues,
    resolver: zodResolver(ActivitySchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <DatePicker label={"日付"} {...field} format="yyyy/MM/dd" />
          )}
        />
        {errors.date && (
          <Typography color="error">日付を入力してください</Typography>
        )}
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
  );
}
