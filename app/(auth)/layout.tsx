"use client";
import ActiveLink from "@/components/ActiveLink";
import useAuth from "@/hooks/useAuth";
import Authenticated from "@/middleware/authenticated";
import { useAuthLogout } from "@/services/AuthService";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import EventNoteIcon from "@mui/icons-material/EventNote";
import GroupsIcon from "@mui/icons-material/Groups";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import { ThemeProvider } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { usePathname } from "next/navigation";
import * as React from "react";
import theme from "../theme";
import "@/app/globals.css";

const drawerWidth = 240;

const routes = [
  { text: "Clientes", path: "/clients", icon: <Diversity2Icon /> },
  { text: "Empleados", path: "/employees", icon: <GroupsIcon /> },
  { text: "Timesheets", path: "/timesheets", icon: <EventNoteIcon /> },
];

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: `${drawerWidth}px`,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(() => ({
  width: `calc(100% - ${drawerWidth}px)`,
  marginLeft: `${drawerWidth}px`,
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "center",
}));

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const { getUsername } = useAuth();
  const { mutateAsync: logout, isPending } = useAuthLogout();

  const handleSubmitLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    await logout();
  };

  return (
    <ThemeProvider theme={theme}>
      <Authenticated>
        <AppBar position="fixed">
          <Toolbar>
            <div className="flex items-center justify-center">
              <Typography variant="h5" color="white">
                OCMI
              </Typography>
              <SettingsIcon className="ml-2" sx={{ fontSize: 25 }} />
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          anchor="left"
          variant="permanent"
        >
          <DrawerHeader className="bg-violet-700 text-white">
            <small className="font-medium">{getUsername}</small>
          </DrawerHeader>
          <Divider />
          <List>
            {routes.map(({ text, path, icon }, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton selected={pathName === path}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ActiveLink path={path}>
                    <ListItemText primary={text} />
                  </ActiveLink>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={handleSubmitLogout}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Cerrar sesión" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Main>
          <DrawerHeader />
          {children}
        </Main>
      </Authenticated>
    </ThemeProvider>
  );
}
