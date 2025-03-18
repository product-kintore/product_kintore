import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link,
  Typography,
  Divider,
  useTheme,
} from "@mui/material";
import { Menu, ChevronLeft } from "@mui/icons-material";
import { useState } from "react";
import { styled } from "@mui/material/styles";

type Props = {
  linkList: { text: string; icon: JSX.Element; href: string }[];
  handleDrawerMenuClick: (href: string) => void;
  handleTitleClick: () => void;
};

const drawerWidth = 240;

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main || "#2e7d32",
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  zIndex: theme.zIndex.drawer + 1,
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function AuthenticatedAppbar(props: Props) {
  const [drawerState, setDrawerState] = useState(false);
  const theme = useTheme();

  const handleDrawerMenuClick = (href: string) => {
    props.handleDrawerMenuClick(href);
    setDrawerState(false);
  };

  const drawerList = () => (
    <Box sx={{ width: drawerWidth }} role="presentation">
      <DrawerHeader>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1, 
            ml: 2,
            color: theme.palette.primary.main,
            fontWeight: 600
          }}
        >
          Product Kintore
        </Typography>
        <IconButton onClick={() => setDrawerState(false)}>
          <ChevronLeft />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {props.linkList.map((element, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton 
              onClick={() => handleDrawerMenuClick(element.href)}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(46, 125, 50, 0.08)',
                },
              }}
            >
              <ListItemIcon sx={{ color: theme.palette.primary.main }}>
                {element.icon}
              </ListItemIcon>
              <ListItemText 
                primary={element.text} 
                primaryTypographyProps={{ 
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBarStyled position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setDrawerState(true)}
          >
            <Menu />
          </IconButton>
          <Link
            component="button"
            variant="h6"
            onClick={props.handleTitleClick}
            sx={{ 
              flexGrow: 1, 
              color: "white", 
              textAlign: "inherit",
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            Product Kintore
          </Link>
        </Toolbar>
      </AppBarStyled>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        anchor="left"
        open={drawerState}
        onClose={() => setDrawerState(false)}
      >
        {drawerList()}
      </Drawer>
    </>
  );
}
