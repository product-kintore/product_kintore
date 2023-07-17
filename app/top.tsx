import {
  Paper,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
} from "@mui/material";

const cardContents = [
  {
    title: "初めての方へ",
    body: [
      "活動体験を見れる",
      "コミュニティの統計情報",
      "なにをすればいいかわかる",
    ],
  },
  {
    title: "ここにはどんな人たちがいるの？",
    body: ["コミュニティ統計情報"],
  },
  {
    title: "どんなことができるの？",
    body: ["活動体験を見れる"],
  },
  {
    title: "自己紹介をしてみよう",
    body: ["自己紹介を書いてみよう"],
  },
];

export default function Top() {
  return (
    <Paper elevation={0} sx={{ margin: (theme) => theme.spacing(4) }}>
      <Grid container spacing={3}>
        {cardContents.map((cardContent, index) => (
          <Grid item xs={3} key={index}>
            <Card sx={{ height: "200px" }}>
              <CardContent>
                <Typography variant="h5" component="div" marginBottom={2}>
                  {cardContent.title}
                </Typography>
                {cardContent.body.map((text, index) => (
                  <Typography key={index} variant="body2">
                    {text}
                  </Typography>
                ))}
              </CardContent>
              <CardActions>
                {/* TODO : change text and link button */}
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" component="div" marginTop={6}>
        ■ TOP コンテンツ
      </Typography>
      <Paper elevation={1}>
        {/* TODO: contents fix */}
        <Typography variant="body1">test</Typography>
      </Paper>
    </Paper>
  );
}
