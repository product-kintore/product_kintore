"use client";

import { ReactNode } from "react";
import { 
  Card, 
  CardContent, 
  CardActions, 
  Typography, 
  Button,
  Box,
  useTheme
} from "@mui/material";
import { styled } from "@mui/material/styles";

interface DashboardCardProps {
  title: string;
  children: ReactNode;
  actionText?: string;
  actionHref?: string;
  elevation?: number;
  minHeight?: number;
}

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  },
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  borderBottom: `2px solid ${theme.palette.success.light}`,
  paddingBottom: theme.spacing(1),
  marginBottom: theme.spacing(2),
  fontWeight: 600,
}));

export default function DashboardCard({ 
  title, 
  children, 
  actionText = "詳細を見る", 
  actionHref = "#",
  elevation = 2,
  minHeight = 200
}: DashboardCardProps) {
  const theme = useTheme();

  return (
    <StyledCard elevation={elevation} sx={{ minHeight }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <CardTitle variant="h6" color="success.dark">
          {title}
        </CardTitle>
        <Box>
          {children}
        </Box>
      </CardContent>
      {actionText && (
        <CardActions>
          <Button 
            size="small" 
            href={actionHref}
            sx={{ 
              color: theme.palette.success.main,
              '&:hover': {
                backgroundColor: theme.palette.success.light,
                color: theme.palette.common.white,
              }
            }}
          >
            {actionText}
          </Button>
        </CardActions>
      )}
    </StyledCard>
  );
}
