import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  EmojiEmotions as IconsIcon,
  Map as MapIcon,
  Notifications as NotificationsIcon,
  Person as UserProfileIcon,
  TableChart as TableListIcon,
  TextFields as TypographyIcon,
  Language as LanguageIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    onClose();
    navigate(path);
  };

  const menuItems = [
    {
      text: "Dashboard",
      icon: <DashboardIcon sx={{ color: "white" }} />,
      path: "/",
    },
    {
      text: "User Profile",
      icon: <UserProfileIcon sx={{ color: "white" }} />,
      path: "/user-profile",
    },
  ];

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          background: "linear-gradient(0deg,#ba54f5,#e14eca)",
          color: "white",
        },
      }}
    >
      <div className="flex justify-end p-2">
        <IconButton onClick={onClose}>
          <CloseIcon sx={{ color: "white" }} />
        </IconButton>
      </div>
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => handleNavigation(item.path)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
