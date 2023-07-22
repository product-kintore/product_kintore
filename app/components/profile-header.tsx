import { Grid, Typography, Avatar } from "@mui/material";
import { User } from "@/app/types/types";

export default function ProfileHeader({ user }: { user: User }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Avatar
          sx={{ width: 80, height: 80, marginLeft: 3, marginTop: 3 }}
          src={user.photoUrl}
        />
      </Grid>
      <Grid item xs={5}>
        <Typography variant="h6" marginTop={5} component={"div"}>
          {user.name}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="body2" marginTop={3}>
          更新日時:
        </Typography>
      </Grid>
    </Grid>
  );
}
