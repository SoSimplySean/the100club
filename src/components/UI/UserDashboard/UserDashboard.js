import React from "react";

import EditProfile from "./EditProfile";
import ApplicationProcess from "./ApplicationProcess/ApplicationProcess";

import {
  Grid,
  Paper,
  MenuItem,
} from "@mui/material";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { supabase } from "../../../api";

const UserDashboard = ({ session }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const signOut = () => {
    supabase.auth.signOut();
    navigate("/", { replace: true });
  };

  return (
    <Grid>
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
            Apply to become a member of The 100 Club ★
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

      <Routes>
        <Route path="/" element={<EditProfile key={session.user.id} session={session}/>} />
        <Route path="editProfile" element={<EditProfile key={session.user.id} session={session}/>} />
        <Route path="application" element={<ApplicationProcess />} />
      </Routes>
    </Grid>
  );
};

export default UserDashboard;
