import { Paper, Stack, Typography } from "@mui/material";
import ActivityRecord from "@/app/components/activity-record";
import ProfileHeader from "@/app/components/profile-header";
import ProfileList from "@/app/components/profile-list";
import { User } from "@/app/types/types";

export default function ProfileContainer({ user }: { user: User }) {
  return (
    <Stack spacing={2} margin={8}>
      <Paper elevation={1}>
        <ProfileHeader user={user} />
        <ProfileList />
      </Paper>
      <Paper elevation={1}>
        <Typography variant="h6" component="div" marginTop={3} marginLeft={3}>
          活動記録
        </Typography>
        <Stack spacing={2}>
          <ActivityRecord />
        </Stack>
      </Paper>
    </Stack>
  );
}
