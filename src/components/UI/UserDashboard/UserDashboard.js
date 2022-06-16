import React from "react";

import EditProfile from "./EditProfile";
import ApplicationProcess from "./ApplicationProcess/ApplicationProcess";

import { Grid, Paper, Typography, Avatar, MenuItem } from "@mui/material";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { supabase } from "../../../api";

const UserDashboard = () => {
  const location = useLocation();

  return (
    <Grid>
      <Paper
        elevation={4}
        sx={{ padding: "2rem", mt: "2rem", textAlign: "center" }}
      >
        <Typography>Path: {location.pathname}</Typography>
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
        sx={{
          padding: "2rem",
          mt: "2rem",
          textAlign: "center",
        }}
      >
        <Link to="application" style={{ textDecoration: "none" }}>
          <MenuItem
            key={1}
            divider="true"
            value={"Application"}
            sx={{ color: "primary.main" }}
          >
            Apply to become a member of The 100 Club
          </MenuItem>
        </Link>

        <Link to="editProfile" style={{ textDecoration: "none" }}>
          <MenuItem
            key={1}
            divider="true"
            value={"Edit Profile"}
            sx={{ color: "primary.main" }}
            selected
          >
            Edit Profile
          </MenuItem>
        </Link>

        <MenuItem
          key={2}
          value={"Log Out"}
          onClick={() => supabase.auth.signOut()}
        >
          Logout
        </MenuItem>
      </Paper>

      <Routes>
        <Route path="/" element={<EditProfile />} />
        <Route path="editProfile" element={<EditProfile />} />
        <Route path="application" element={<ApplicationProcess />} />
      </Routes>
    </Grid>
  );
};

export default UserDashboard;
