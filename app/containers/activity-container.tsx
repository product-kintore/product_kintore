import { Paper, Stack, Typography } from "@mui/material";
import ActivityRecord from "@/app/components/activity-record";
// import { User } from "@/app/types/types";

export default function ActivityContainer() {
  return (
    <Paper elevation={1}>
      <Typography variant="h6" component="div" marginTop={3} marginLeft={3}>
        活動記録
      </Typography>
      <Stack spacing={2}>
        <ActivityRecord />
      </Stack>
    </Paper>
  );
}
