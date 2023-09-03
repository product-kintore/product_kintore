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
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";

type Props = {
  linkList: { text: string; icon: JSX.Element; href: string }[];
  handleDrawerMenuClick: (href: string) => void;
  handleTitleClick: () => void;
};

export default function AuthenticatedAppbar(props: Props) {
  const [drawerState, setDrawerState] = useState(false);

  const handleDrawerMenuClick = (href: string) => {
    props.handleDrawerMenuClick(href);
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
          <Link
            component="button"
            variant="h6"
            onClick={props.handleTitleClick}
            sx={{ flexGrow: 1, color: "white", textAlign: "inherit" }}
          >
            Title
          </Link>
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
