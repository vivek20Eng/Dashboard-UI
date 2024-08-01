import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";
import Footer from "./components/Footer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1e1e2f",
    },
    background: {
      default: "#1e1e2f",
      paper: "#27293d",
    },
  },
});

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar onMenuClick={handleDrawerToggle} />
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <Sidebar open={drawerOpen} onClose={handleDrawerToggle} />
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, mt: 8, backgroundColor: "#1e1e2f" }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/user-profile" element={<UserProfile />} />
            </Routes>
          </Box>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
