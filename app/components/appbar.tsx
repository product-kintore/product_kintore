import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Appbar() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Title
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
