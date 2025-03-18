import React from "react";
import {
  Paper,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from "@mui/material";
import {
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  EmojiEvents as EmojiEventsIcon,
  Lightbulb as LightbulbIcon,
  Group as GroupIcon
} from "@mui/icons-material";

const cardContents = [
  {
    title: "初めての方へ",
    body: [
      "活動体験を見れる",
      "コミュニティの統計情報",
      "なにをすればいいかわかる",
    ],
    icon: <LightbulbIcon color="primary" />,
  },
  {
    title: "ここにはどんな人たちがいるの？",
    body: ["コミュニティ統計情報"],
    icon: <GroupIcon color="primary" />,
  },
  {
    title: "どんなことができるの？",
    body: ["活動体験を見れる"],
    icon: <StarIcon color="primary" />,
  },
  {
    title: "自己紹介をしてみよう",
    body: ["自己紹介を書いてみよう"],
    icon: <EmojiEventsIcon color="primary" />,
  },
];

const topContents = [
  {
    title: "最近の活動",
    description: "コミュニティで最近行われた活動の一覧です。",
    icon: <TrendingUpIcon color="primary" />,
  },
  {
    title: "人気のトピック",
    description: "メンバーに人気のトピックをチェックしましょう。",
    icon: <StarIcon color="primary" />,
  },
];

export default function Top() {
  // Override theme colors for this component
  const primaryColor = "#2e7d32"; // Green color from the approved design
  const lightPrimaryColor = "#60ad5e";
  const darkPrimaryColor = "#005005";
  
  return (
    <Box sx={{ 
      flexGrow: 1, 
      backgroundColor: '#f5f5f5',
      borderRadius: 2,
      p: 3
    }}>
      <Grid container spacing={3}>
        {cardContents.map((cardContent, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ 
              height: "100%", 
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 8,
              },
              borderRadius: 2
            }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography 
                  variant="h6" 
                  component="h2" 
                  sx={{ 
                    mb: 2, 
                    pb: 1, 
                    borderBottom: `2px solid ${lightPrimaryColor}`,
                    fontWeight: 600,
                    color: darkPrimaryColor
                  }}
                >
                  {cardContent.title}
                </Typography>
                <List dense>
                  {cardContent.body.map((text, idx) => (
                    <ListItem key={idx} sx={{ pl: 0 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        {cardContent.icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <CardActions>
                <Button 
                  size="small" 
                  sx={{ 
                    color: primaryColor,
                    borderRadius: 20,
                    textTransform: 'none',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: lightPrimaryColor,
                      color: 'white',
                    }
                  }}
                >
                  詳細を見る
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography 
        variant="h5" 
        component="h2" 
        sx={{ 
          mt: 6, 
          mb: 3, 
          fontWeight: 600,
          color: darkPrimaryColor,
          borderLeft: '4px solid',
          borderColor: primaryColor,
          pl: 2
        }}
      >
        TOP コンテンツ
      </Typography>
      
      <Paper 
        elevation={2} 
        sx={{ 
          p: 3, 
          borderRadius: 2,
          backgroundColor: 'rgba(46, 125, 50, 0.03)'
        }}
      >
        <Grid container spacing={3}>
          {topContents.map((content, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box sx={{ mr: 2 }}>{content.icon}</Box>
                <Typography variant="h6" component="h3" sx={{ color: darkPrimaryColor, fontWeight: 600 }}>
                  {content.title}
                </Typography>
              </Box>
              <Typography variant="body1">{content.description}</Typography>
              {index < topContents.length - 1 && (
                <Divider sx={{ my: 2, display: { xs: 'block', md: 'none' } }} />
              )}
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
}
