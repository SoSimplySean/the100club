import React from "react";

import EditProfile from "./EditProfile";
import ApplicationProcess from "./ApplicationProcess/ApplicationProcess";

import { Grid, Paper, MenuItem, Typography } from "@mui/material";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { supabase } from "../../../api";

const UserDashboard = ({ session, user }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const signOut = () => {
    supabase.auth.signOut();
    navigate("/", { replace: true });
  };

  return (
    <Grid
      container
      component="main"
      sx={{ mt: "4rem", justifyContent: "space-between" }}
    >
      <Grid item xs={12} lg={4.5}>
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
              selected={location.pathname === "/dashboard/application"}
            >
              Apply to be a pro member
            </MenuItem>
          </Link>

          <Link to="editProfile" style={{ textDecoration: "none" }}>
            <MenuItem
              key={1}
              divider="true"
              value={"Edit Profile"}
              sx={{ color: "primary.main" }}
              selected={
                location.pathname === "/dashboard/editProfile" ||
                location.pathname === "/dashboard"
              }
            >
              Edit Profile
            </MenuItem>
          </Link>

          <MenuItem key={2} value={"Log Out"} onClick={signOut}>
            Logout
          </MenuItem>
        </Paper>
        {user.membershipLevel !== "member" && (
          <Paper
            elevation={4}
            sx={{
              padding: "2rem",
              mt: "2rem",
              textAlign: "left",
              bgcolor: "primary.main",
              color: "white",
            }}
          >
            <Typography>
              You are currently part of our waitlist. Apply in the next cohort
              to become a member of The 100 Club and get upgraded access. Or
              message Sean via telegram @MrRaincloud
            </Typography>
          </Paper>
        )}
      </Grid>

      <Grid item xs={12} lg={7} elevation={6} square>
        <Routes>
          <Route
            path="/"
            element={
              <EditProfile
                key={session.user.id}
                session={session}
                membershipLevel={user.membershipLevel}
              />
            }
          />
          <Route
            path="editProfile"
            element={
              <EditProfile
                key={session.user.id}
                session={session}
                membershipLevel={user.membershipLevel}
              />
            }
          />
          <Route path="application" element={<ApplicationProcess />} />
        </Routes>
      </Grid>
    </Grid>
  );
};

export default UserDashboard;
