import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";

const Navbar = ({ onMenuClick }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "#1e1e2f" }}
      className="shadow-md w-full h-[5rem] justify-center"
    >
      <Toolbar className="flex justify-between items-center">
        <div className="flex items-center">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Creative Tim
          </Typography>
        </div>
        <div className="flex items-center">
          <IconButton
            edge="end"
            color="inherit"
            aria-label="account"
            onClick={handleProfileMenuOpen}
          >
            <Avatar
              src="https://images.unsplash.com/photo-1601498446313-7a3a7e4c1b78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHByb2ZpbGUlMjBwaWMlMjB3b3JrJTIwc3Rvcnl8ZW58MHx8fDE2NjgxMTU3MTg&ixlib=rb-1.2.1&q=80&w=400"
            />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              style: {
                maxHeight: 48 * 4.5,
                width: "20ch",
              },
            }}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
