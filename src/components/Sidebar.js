import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { 
  Dashboard as DashboardIcon, 
  EmojiEmotions as IconsIcon, 
  Map as MapIcon, 
  Notifications as NotificationsIcon, 
  Person as UserProfileIcon, 
  TableChart as TableListIcon, 
  TextFields as TypographyIcon, 
  Language as LanguageIcon, 
  Close as CloseIcon 
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    onClose();
    navigate(path);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon style={{ color: 'white' }} />, path: '/dashboard' },
    { text: 'Icons', icon: <IconsIcon style={{ color: 'white' }} />, path: '/icons' },
    { text: 'Maps', icon: <MapIcon style={{ color: 'white' }} />, path: '/maps' },
    { text: 'Notifications', icon: <NotificationsIcon style={{ color: 'white' }} />, path: '/notifications' },
    { text: 'User Profile', icon: <UserProfileIcon style={{ color: 'white' }} />, path: '/user-profile' },
    { text: 'Table List', icon: <TableListIcon style={{ color: 'white' }} />, path: '/table-list' },
    { text: 'Typography', icon: <TypographyIcon style={{ color: 'white' }} />, path: '/typography' },
    { text: 'RTL Support', icon: <LanguageIcon style={{ color: 'white' }} />, path: '/rtl-support' }
  ];

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          background: 'linear-gradient(0deg,#ba54f5,#e14eca)',
          color: 'white',
        },
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '8px' }}>
        <IconButton onClick={onClose}>
          <CloseIcon style={{ color: 'white' }} />
        </IconButton>
      </div>
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} onClick={() => handleNavigation(item.path)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
