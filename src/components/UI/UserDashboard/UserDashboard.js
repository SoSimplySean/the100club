import React from "react";

import EditProfile from "./EditProfile";

import { Grid, Paper, Typography, Avatar, MenuItem } from "@mui/material";

const UserDashboard = () => {
  return (
    <Grid>
      <Paper
        elevation={4}
        sx={{ padding: "2rem", mt: "2rem", textAlign: "center" }}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://picsum.photos/200"
          sx={{ width: 150, height: 150, mx: "auto" }}
        />
        <Typography
          variant="subtitle2"
          sx={{ mt: "1.5rem", maxWidth: "250px", mx: "auto" }}
        >
          Image must be .jpg or .png with minimum size of 160x160 pixels.
        </Typography>
      </Paper>
      <Paper
        elevation={4}
        sx={{ padding: "2rem", mt: "2rem", textAlign: "center" }}
      >
        <MenuItem key={1} divider="true" value={"Application"}>
          Apply to become a member of The 100 Club
        </MenuItem>
        <MenuItem key={1} divider="true" value={"Edit Profile"}>
          Edit Profile
        </MenuItem>
        <MenuItem key={2} value={"Log Out"}>
          Logout
        </MenuItem>
      </Paper>
      {/* Add router stuff */}
      <EditProfile />
    </Grid>
  );
};

export default UserDashboard;
