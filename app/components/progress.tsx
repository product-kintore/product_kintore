import { Paper, CircularProgress } from "@mui/material";

export default function Progress() {
  return (
    <Paper
      elevation={0}
      sx={{ textAlign: "center", marginTop: (theme) => theme.spacing(8) }}
    >
      <CircularProgress />
    </Paper>
  );
}
