import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";

type Props = {
  linkList: { text: string; icon: JSX.Element; href: string }[];
  handleClick: (href: string) => void;
};

export default function AuthenticatedAppbar(props: Props) {
  const [drawerState, setDrawerState] = useState(false);

  const handleDrawerMenuClick = (href: string) => {
    props.handleClick(href);
    setDrawerState(false);
  };

  const drawerList = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {props.linkList.map((element, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => handleDrawerMenuClick(element.href)}>
              <ListItemIcon>{element.icon}</ListItemIcon>
              <ListItemText primary={element.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed">
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Title
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerState}
        onClose={() => setDrawerState(false)}
      >
        {drawerList()}
      </Drawer>
    </>
  );
}
