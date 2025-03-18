"use client";

import React from "react";
import { 
  Grid, 
  Typography, 
  Paper, 
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
import DashboardCard from "./dashboard-card";

const cardContents = [
  {
    title: "初めての方へ",
    body: [
      "活動体験を見れる",
      "コミュニティの統計情報",
      "なにをすればいいかわかる",
    ],
    icon: <LightbulbIcon color="success" />,
  },
  {
    title: "ここにはどんな人たちがいるの？",
    body: ["コミュニティ統計情報"],
    icon: <GroupIcon color="success" />,
  },
  {
    title: "どんなことができるの？",
    body: ["活動体験を見れる"],
    icon: <StarIcon color="success" />,
  },
  {
    title: "自己紹介をしてみよう",
    body: ["自己紹介を書いてみよう"],
    icon: <EmojiEventsIcon color="success" />,
  },
];

const topContents = [
  {
    title: "最近の活動",
    description: "コミュニティで最近行われた活動の一覧です。",
    icon: <TrendingUpIcon color="success" />,
  },
  {
    title: "人気のトピック",
    description: "メンバーに人気のトピックをチェックしましょう。",
    icon: <StarIcon color="success" />,
  },
];

export default function DashboardContent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {cardContents.map((cardContent, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <DashboardCard title={cardContent.title}>
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
            </DashboardCard>
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
          color: 'success.dark',
          borderLeft: '4px solid',
          borderColor: 'success.main',
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
                <Typography variant="h6" component="h3" color="success.dark">
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
