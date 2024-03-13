import { AppBar, Link, Toolbar } from "@mui/material";

type Props = {
  handleClick: () => void;
};

export default function Appbar(props: Props) {
  const { handleClick } = props;
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Link
          component="button"
          variant="h6"
          onClick={handleClick}
          sx={{ flexGrow: 1, color: "white", textAlign: "inherit" }}
        >
        </Link>
      </Toolbar>
    </AppBar>
  );
}
