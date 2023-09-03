import { Paper, Typography, Button, Grid } from "@mui/material";
import { Activity } from "@/app/types/types";
import EditIcon from "@mui/icons-material/Edit";

type Props = {
  activity: Activity;
  handleUpdateActivity?: (id: string) => void;
};

export default function ActivityListItem(props: Props) {
  const { activity, handleUpdateActivity } = props;

  return (
    <Paper elevation={1} sx={{ margin: 3 }}>
      <Grid container>
        {handleUpdateActivity ? (
          <>
            <Grid item xs={6}>
              <Typography variant="body1" marginLeft={2} marginTop={3}>
                活動タイトル : {activity.title}
              </Typography>
            </Grid>
            <Grid item xs={6} textAlign="right" marginTop={2}>
              <Button
                sx={{ color: "gray" }}
                onClick={() => handleUpdateActivity(activity.id)}
              >
                <EditIcon />
              </Button>
            </Grid>
          </>
        ) : (
          <Grid item xs={12}>
            <Typography variant="body1" marginLeft={2} marginTop={4}>
              活動タイトル : {activity.title}
            </Typography>
          </Grid>
        )}
        <Grid item xs={12}>
          <Typography variant="body1" marginLeft={2} marginTop={2}>
            活動日 : {activity.date.toDate().toLocaleDateString()}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body1"
            color="text.primary"
            marginTop={4}
            marginLeft={2}
            marginBottom={4}
          >
            {activity.description}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
