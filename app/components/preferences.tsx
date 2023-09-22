import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

// FIXME: do not use any
export default function Preferences({ user }: { user: any }) {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemText
          sx={{ marginLeft: 4, marginRight: 4, marginTop: 3 }}
          primary="所属会社"
          secondary={
            <Typography variant="body1" color="text.primary">
              {user.company}
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
              {user.role}
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
              {user.experiencePeriod}年
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
              {user.selfIntroduction}
            </Typography>
          }
        />
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemText
          sx={{ marginLeft: 4, marginRight: 4, marginTop: 3 }}
          primary="リンク"
          secondary={
            <>
              <Typography variant="body1" color="text.primary">
                {user.links.twitter}
              </Typography>
              <Typography variant="body1" color="text.primary">
                {user.links.note}
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemText
          sx={{ marginLeft: 4, marginRight: 4, marginTop: 3 }}
          primary="入ったきっかけ"
          secondary={
            <>
              {user.joinedBackground.collectingInformation && (
                <Typography variant="body1" color="text.primary">
                  情報収集
                </Typography>
              )}
              {user.joinedBackground.connectingPeople && (
                <Typography variant="body1" color="text.primary">
                  横のつながり・交流
                </Typography>
              )}
              {user.joinedBackground.other && (
                <Typography variant="body1" color="text.primary">
                  その他
                </Typography>
              )}
              {user.joinedBackground.freeDescription && (
                <Typography variant="body1" color="text.primary">
                  {user.joinedBackground.freeDescription}
                </Typography>
              )}
            </>
          }
        />
      </ListItem>
      {/* <Divider /> */}
    </List>
  );
}
