import { Box, Button, Card, Container, Divider, Typography, useMediaQuery, LinearProgress } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";

export default function Signin() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [loading, setLoading] = useState(true);
  
  // Simulate loading to handle Firebase initialization gracefully
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Container maxWidth="sm" sx={{ 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center",
      alignItems: "center",
      py: 4,
      backgroundColor: "#f5f7fa"
    }}>
      <Card 
        elevation={3} 
        sx={{ 
          width: "100%", 
          padding: isMobile ? theme.spacing(4) : theme.spacing(6), 
          borderRadius: theme.spacing(1),
          backgroundColor: "#ffffff",
          textAlign: "center",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
          position: "relative",
          overflow: "visible"
        }}
      >
        {loading && (
          <LinearProgress 
            sx={{ 
              position: "absolute", 
              top: 0, 
              left: 0, 
              right: 0, 
              height: "4px",
              borderTopLeftRadius: theme.spacing(1),
              borderTopRightRadius: theme.spacing(1)
            }} 
          />
        )}
        
        <Box sx={{ 
          position: "absolute", 
          top: "-24px", 
          left: "50%", 
          transform: "translateX(-50%)",
          backgroundColor: "#3f51b5",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 12px rgba(63, 81, 181, 0.3)"
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </Box>
        
        <Box sx={{ mb: 4, mt: 2 }}>
          <Box sx={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            mb: 3
          }}>
            <Typography 
              variant="h4" 
              component="div" 
              sx={{ 
                fontWeight: 700, 
                color: "#3f51b5",
                letterSpacing: "-0.5px",
                fontSize: isMobile ? "1.75rem" : "2.125rem"
              }}
            >
              Product Kintore
            </Typography>
          </Box>
          <Typography variant="h5" component="h1" sx={{ 
            fontWeight: 600, 
            color: "#333333",
            mb: 1,
            fontSize: isMobile ? "1.25rem" : "1.5rem"
          }}>
            プロダクト筋トレへようこそ
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            プロダクト開発のプロフェッショナルのためのコミュニティ
          </Typography>
          <Divider sx={{ mb: 4 }} />
        </Box>
        
        <Button
          component="a"
          href={process.env.NEXT_PUBLIC_SLACK_OAUTH_URL || "#"}
          variant="contained"
          size="large"
          disabled={loading}
          sx={{
            backgroundColor: "#4A154B",
            color: "#ffffff",
            padding: theme.spacing(1.5, 3),
            borderRadius: theme.spacing(0.75),
            textTransform: "none",
            fontWeight: 600,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              backgroundColor: "#3e1240",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              transition: "all 0.3s ease"
            },
            display: "flex",
            alignItems: "center",
            width: "100%",
            maxWidth: "320px",
            margin: "0 auto",
            transition: "all 0.2s ease"
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: "24px",
              width: "24px",
              marginRight: "12px",
            }}
            viewBox="0 0 122.8 122.8"
          >
            <path
              d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z"
              fill="#ffffff"
            ></path>
            <path
              d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z"
              fill="#ffffff"
            ></path>
            <path
              d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z"
              fill="#ffffff"
            ></path>
            <path
              d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z"
              fill="#ffffff"
            ></path>
          </svg>
          Slackでサインイン
        </Button>
        
        <Typography variant="body2" color="text.secondary" sx={{ mt: 4, fontSize: "0.85rem" }}>
          サインインすることで、利用規約とプライバシーポリシーに同意したことになります。
        </Typography>
      </Card>
      
      <Box sx={{ mt: 3, textAlign: "center" }}>
        <Typography variant="caption" color="text.secondary" sx={{ fontSize: "0.75rem" }}>
          © {new Date().getFullYear()} Product Kintore. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
}
