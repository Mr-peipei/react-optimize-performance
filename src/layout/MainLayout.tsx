import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
} from "@mui/material";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { HEADER } from "../config-global";
import { paths } from "../routes/paths";

const drawerWidth = 240;

export default function MainLayout() {
  const [height, setHeight] = React.useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      height={height}
      flex={1}
      width="100%"
    >
      <Header />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <Stack>
            <Toolbar
              sx={{
                height: {
                  xs: HEADER.H_MOBILE,
                  md: HEADER.H_MAIN_DESKTOP,
                },
              }}
            >
              <Stack spacing={1} direction="row" alignItems="center">
                <Link
                  to={paths.top}
                  component={RouterLink}
                  variant="subtitle2"
                  sx={{ color: "black" }}
                >
                  Home
                </Link>
              </Stack>
            </Toolbar>
            <Divider />
            <List>
              {["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Stack>
        </Drawer>
      </Box>

      <Stack
        component="main"
        sx={{
          flexGrow: 1,
          width: "100%",
          marginLeft: `${drawerWidth}px`,
          p: 3,
          mt: `${HEADER.H_MAIN_DESKTOP}px`,
        }}
      >
        <Outlet />
      </Stack>
    </Box>
  );
}
