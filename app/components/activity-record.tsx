import { Paper, Typography } from "@mui/material";

// TODO: implement props
export default function ActivityRecord() {
  return (
    <Paper elevation={1} sx={{ margin: 3 }}>
      <Typography variant="body1" marginTop={2} marginLeft={2} marginRight={2}>
        活動タイトル :
      </Typography>
      <Typography variant="body1" marginTop={1} marginLeft={2} marginRight={2}>
        活動日 :
      </Typography>
      <Typography
        variant="body2"
        color="text.primary"
        marginTop={2}
        marginLeft={2}
        marginRight={2}
      >
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the
        mussels, if you like.
      </Typography>
    </Paper>
  );
}
