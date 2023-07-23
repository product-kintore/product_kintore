import { Paper, Typography, Grid, Button, Avatar } from "@mui/material";
// import ProfileList from "@/app/components/profile-list";
// import { User } from "@/app/types/types";
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from "next/navigation";
import Preferences from "@/app/components/preferences";

// FIXME: do not use any
export default function ProfileContainer({ user, isEditable }: { user: any, isEditable: boolean }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/myprofile/edit`);
  };
  // console.log(user);
  return (
    <Paper elevation={1}>
      <Grid container spacing={2}>
        {isEditable && (
          <Grid item xs={12} textAlign={"right"}>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 3, marginRight: 3 }}
              onClick={handleClick}
            >
              <EditIcon />
            </Button>
          </Grid>
        )}
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
      <Preferences user={user} />
    </Paper>
  );
}
