import React from "react";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Avatar,
  Box,
} from "@mui/material";
import { Facebook, Twitter, Language } from "@mui/icons-material";

const UserProfile = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Paper
          sx={{
            p: 3,
            bgcolor: "#27293d",
            color: "white",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Edit Profile
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Company"
                defaultValue="Creative Code Inc."
                disabled
                sx={{ input: { color: "white" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Username"
                defaultValue="michael23"
                sx={{ input: { color: "white" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email address"
                defaultValue="mike@email.com"
                sx={{ input: { color: "white" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                defaultValue="Mike"
                sx={{ input: { color: "white" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                defaultValue="Andrew"
                sx={{ input: { color: "white" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                sx={{ input: { color: "white" } }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="City"
                defaultValue="New York"
                sx={{ input: { color: "white" } }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Country"
                defaultValue="United States"
                sx={{ input: { color: "white" } }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Postal Code"
                defaultValue="ZIP Code"
                sx={{ input: { color: "white" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="About Me"
                defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                sx={{ input: { color: "white" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(to right, #e14eca, #ba54f5)",
                  color: "white",
                  "&:hover": {
                    background: "linear-gradient(to right, #e14eca, #ba54f5)",
                    opacity: 0.9,
                  },
                }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper
          sx={{
            p: 3,
            bgcolor: "#27293d",
            color: "white",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "100px",
              background: "linear-gradient(to right bottom, #e14eca, #ba54f5)",
              transform: "skewY(-5deg)",
              transformOrigin: "top left",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "100px",
              background: "linear-gradient(to left top, #e14eca, #ba54f5)",
              transform: "skewY(-5deg)",
              transformOrigin: "top left",
            }}
          />
          <Box sx={{ position: "relative", textAlign: "center", pt: 5 }}>
            <Avatar
              sx={{
                width: 120,
                height: 120,
                margin: "auto",
                border: "4px solid #27293d",
                boxShadow: "0 0 0 3px #e14eca",
              }}
              alt="Mike Andrew"
              src="/path-to-your-image.jpg"
            />
            <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
              Mike Andrew
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "#e14eca" }}>
              CEO / Co-Founder
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, px: 2 }}>
              Do not be scared of the truth because we need to restart the human
              foundation in truth And I love you like Kanye loves Kanye I love
              Rick Owens' bed design but the back is...
            </Typography>
            <Box
              sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 2 }}
            >
              <Facebook sx={{ color: "#3b5998" }} />
              <Twitter sx={{ color: "#55acee" }} />
              <Language sx={{ color: "#e14eca" }} />
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default UserProfile;
