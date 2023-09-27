import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { User } from "@/app/types/types";

type Props = {
  user: User;
};

export default function ProfileAttributeList(props: Props) {
  const { user } = props;

  return (
    <List>
      <ListItem disablePadding>
        <ListItemText
          sx={{ marginLeft: 4, marginRight: 4, marginTop: 3 }}
          primary="所属会社"
          secondary={
            <Typography variant="body1" color="text.primary">
              {user.company || "未入力"}
            </Typography>
          }
        />
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemText
          sx={{ marginLeft: 4, marginRight: 4, marginTop: 3 }}
          primary="所属企業でのロール"
          secondary={
            <Typography variant="body1" color="text.primary">
              {user.role || "未入力"}
            </Typography>
          }
        />
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemText
          sx={{ marginLeft: 4, marginRight: 4, marginTop: 3 }}
          primary="PM歴"
          secondary={
            <Typography variant="body1" color="text.primary">
              {user.experiencePeriod ? `${user.experiencePeriod}年` : "未入力"}
            </Typography>
          }
        />
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemText
          sx={{ marginLeft: 4, marginRight: 4, marginTop: 3 }}
          primary="自己紹介"
          secondary={
            <Typography variant="body1" color="text.primary">
              {user.selfIntroduction || "未入力"}
            </Typography>
          }
        />
      </ListItem>
      <Divider />
      {user.socialMedia && (
        <ListItem disablePadding>
          <ListItemText
            sx={{ marginLeft: 4, marginRight: 4, marginTop: 3 }}
            primary="リンク"
            secondary={
              <>
                <Typography variant="body1" color="text.primary">
                  {user.socialMedia.twitter || "未入力"}
                </Typography>
                <Typography variant="body1" color="text.primary">
                  {user.socialMedia.note || "未入力"}
                </Typography>
              </>
            }
          />
        </ListItem>
      )}
      <Divider />
      {user.communityJoinedBackground && (
        <ListItem disablePadding>
          <ListItemText
            sx={{ marginLeft: 4, marginRight: 4, marginTop: 3 }}
            primary="入ったきっかけ"
            secondary={
              <>
                {user.communityJoinedBackground.collectingInformation && (
                  <Typography variant="body1" color="text.primary">
                    情報収集
                  </Typography>
                )}
                {user.communityJoinedBackground.connectingPeople && (
                  <Typography variant="body1" color="text.primary">
                    横のつながり・交流
                  </Typography>
                )}
                {user.communityJoinedBackground.other && (
                  <Typography variant="body1" color="text.primary">
                    その他
                  </Typography>
                )}
                {user.communityJoinedBackground.descriptionWhenOther && (
                  <Typography variant="body1" color="text.primary">
                    {user.communityJoinedBackground.descriptionWhenOther ||
                      "未入力"}
                  </Typography>
                )}
              </>
            }
          />
        </ListItem>
      )}
    </List>
  );
}

{
  /* <List>
<ListItem disablePadding>
  <ListItemText
    sx={{ marginLeft: 4, marginRight: 4, marginTop: 3 }}
    primary="属性情報"
    secondary={
      <Typography variant="body1" color="text.primary">
        {" — I'll be in your neighborhood doing errands this…"}
      </Typography>
    }
  />
</ListItem>
<Divider />
<ListItem disablePadding>
  <ListItemText
    sx={{ marginLeft: 4, marginRight: 4, marginTop: 3 }}
    primary="属性情報"
    secondary={
      <Typography variant="body1" color="text.primary">
        {" — I'll be in your neighborhood doing errands this…"}
      </Typography>
    }
  />
</ListItem>
</List> */
}
