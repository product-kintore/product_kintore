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
import { useRouter } from "next/navigation";
import { User } from "@/app/types/types";

export default function MemberCard({ user }: { user: User }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/members/${user.id}`);
  };

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
        <Chip label="Chip Filled" />
        <Chip label="Chip Filled" />
        <Chip label="Chip Filled" />
        <Chip label="Chip Filled" />

        <Typography variant="body2" color="text.secondary" marginTop={3}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>
          {"もっと見る"}
        </Button>
      </CardActions>
    </Card>
  );
}
