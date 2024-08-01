import React from 'react';
import { Grid, Paper, Typography, TextField, Button, Avatar } from '@mui/material';

const UserProfile = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>Edit Profile</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Company" defaultValue="Creative Code Inc." disabled />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Username" defaultValue="michael23" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Email address" defaultValue="mike@email.com" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="First Name" defaultValue="Mike" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Last Name" defaultValue="Andrew" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Address" defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label="City" defaultValue="New York" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label="Country" defaultValue="United States" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label="Postal Code" defaultValue="ZIP Code" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth multiline rows={4} label="About Me" defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo." />
            </Grid>
            <Grid item xs={12}>
              <Button 
                variant="contained" 
                sx={{
                  background: 'linear-gradient(to left bottom, rgb(225, 78, 202), rgb(186, 84, 245), rgb(225, 78, 202))',
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(to left bottom, rgb(225, 78, 202, 0.9), rgb(186, 84, 245, 0.9), rgb(225, 78, 202, 0.9))',
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
        <Paper sx={{ p: 2, textAlign: 'center' }}>
          <Avatar sx={{ width: 100, height: 100, margin: 'auto' }} alt="Mike Andrew" src="/.jpg" />
          <Typography variant="h6" gutterBottom>Mike Andrew</Typography>
          <Typography variant="subtitle1" gutterBottom>CEO / Co-Founder</Typography>
          <Typography variant="body2">
            Do not be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens' bed design but the back is...
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default UserProfile;
