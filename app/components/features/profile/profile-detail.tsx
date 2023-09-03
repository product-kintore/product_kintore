import { Paper, Typography, Grid, Button, Avatar } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { User } from "@/app/types/types";
import ProfileAttributeList from "./profile-attribute-list";

export type Props = {
  user: User;
  isEditable: boolean;
  handleClick?: () => void;
};

export default function ProfileDetail(props: Props) {
  const { user, isEditable, handleClick } = props;

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
            更新日: {user.updatedAt.toDate().toLocaleDateString()}
          </Typography>
        </Grid>
      </Grid>
      <ProfileAttributeList user={user} />
    </Paper>
  );
}
