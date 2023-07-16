import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

// TODO: implement props
export default function ProfileList() {
  return (
    <List>
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
    </List>
  );
}
