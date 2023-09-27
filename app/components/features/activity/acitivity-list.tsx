import { Paper, Typography, Button, Box } from "@mui/material";
import CreateIcon from "@mui/icons-material/Edit";
import ActivityListItem from "./activity-list-item";
import { Activity } from "@/app/types/types";

type Props = {
  activities: Activity[];
  handleCreateActivity?: () => void;
  handleUpdateActivity?: (id: string) => void;
};

export default function ActivityList(props: Props) {
  const { activities, handleCreateActivity, handleUpdateActivity } = props;

  return (
    <Paper elevation={1}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography variant="h6" component="div" marginTop={3} marginLeft={3}>
          活動記録
        </Typography>
        {handleCreateActivity && (
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 3, marginRight: 3 }}
            onClick={handleCreateActivity}
            startIcon={<CreateIcon />}
          >
            追加する
          </Button>
        )}
      </Box>
      {activities &&
        activities.map((activity) => (
          <ActivityListItem
            key={activity.id}
            activity={activity}
            handleUpdateActivity={handleUpdateActivity}
          />
        ))}
    </Paper>
  );
}
