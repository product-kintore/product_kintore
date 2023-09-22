import { Paper, Stack, Typography, Button, Box } from "@mui/material";
import ActivityRecord from "@/app/components/activity-record";
// import { User } from "@/app/types/types";
import CreateIcon from '@mui/icons-material/Edit';
import { useRouter } from "next/navigation";
import useSWR from "swr";
import Progress from "@/app/components/progress";
import { fetchActivities } from "@/app/lib/firebase";

// FIXME: do not use any
export default function ActivityContainer({ user }: { user: any }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/myprofile/activities/new`);
  }

  const { data, error, isLoading } = useSWR(`${user.id}.activities`, () => {
    return fetchActivities(user.id);
  })

  if (isLoading) return <Progress />;
  if (error) return <>failed fetch activities</>;

  console.log(data);

  return (
    <Paper elevation={1}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography variant="h6" component="div" marginTop={3} marginLeft={3}>
          活動記録
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 3, marginRight: 3 }}
          onClick={handleClick}
          startIcon={<CreateIcon />}
        >
          追加する
        </Button>
      </Box>
      {data && (
        <Stack spacing={2}>
          {data.map((activity: any) => (
            <ActivityRecord key={activity.id} activity={activity} />
          ))}
        </Stack>
      )}
    </Paper>
  );
}
