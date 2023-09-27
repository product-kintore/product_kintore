import * as React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Button,
  Chip,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { User } from "@/app/types/types";

type Props = {
  user: User;
  handleClick: (userId: string) => void;
};

export default function ProfileCard(props: Props) {
  const { user, handleClick } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src={user.photoUrl}
          />
        }
        title={user.name}
      />
      <CardContent>
        {user.role && <Chip label={user.role} />}
        {user.experiencePeriod && <Chip label={`${user.experiencePeriod}年`} />}
        {user.communityInterestedActivities &&
          user.communityInterestedActivities.length > 0 &&
          user.communityInterestedActivities.map((activity, index) => (
            <Chip key={index} label={activity} />
          ))}
        {user.selfIntroduction && (
          <Typography variant="body2" color="text.secondary" marginTop={3}>
            {user.selfIntroduction}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleClick(user.id)}>
          {"もっと見る"}
        </Button>
      </CardActions>
    </Card>
  );
}
