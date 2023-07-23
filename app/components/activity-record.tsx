import { Paper, Typography } from "@mui/material";

// FIXME: do not use any
export default function ActivityRecord({ activity }: { activity: any }) {
  console.log(activity);
  return (
    <Paper elevation={1} sx={{ margin: 3 }}>
      <Typography variant="body1" marginTop={2} marginLeft={2} marginRight={2}>
        活動タイトル : {activity.title}
      </Typography>
      <Typography variant="body1" marginTop={1} marginLeft={2} marginRight={2}>
        活動日 : {activity.date.toDate().toLocaleDateString()}
      </Typography>
      <Typography
        variant="body1"
        color="text.primary"
        marginTop={2}
        marginLeft={2}
        marginRight={2}
      >
        {activity.description}
      </Typography>
    </Paper>
  );
}
