import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { AppBar, Toolbar, Link, Stack } from "@mui/material";
import { paths } from "../routes/paths";
import { HEADER } from "../config-global";

export default function Header() {
  const theme = useTheme();

  return (
    <AppBar color="transparent">
      <Toolbar
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_MAIN_DESKTOP,
          },
          justifyContent: "space-between",
          transition: theme.transitions.create(["height", "background-color"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
        }}
      >
        <Stack spacing={1} direction="row" alignItems="center">
          <Link
            to={paths.top}
            component={RouterLink}
            variant="subtitle2"
            sx={{ color: "black" }}
          >
            Top
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
