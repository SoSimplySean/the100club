import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import { useState } from "react";
import { supabase } from "../api";

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      alert("Thanks for signing up!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid
      container
      component="main"
      sx={{ height: "1200px", mt: "5rem", justifyContent: "space-between" }}
    >
      <CssBaseline />
      <Grid item xs={12} lg={5.5}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
          Want to be part of our next cohort?{" "}
          <Typography
            variant="h3"
            component="span"
            sx={{ color: "secondary.main", fontWeight: "bold" }}
          >
            Join the waitlist
          </Typography>{" "}
          today!
        </Typography>
        <Typography variant="body1" sx={{ my: "2rem" }}>
          Our mastermind applications are currently
          <Typography
            variant="body1"
            component="span"
            sx={{ fontWeight: "bold" }}
          >
            {" "}
            closed!
          </Typography>
          <br></br>
          <br></br>
          The next round of applications for the The 100 Club, Cohort 002, will
          reopen in Sept of 2022.{" "}
          <strong>
            In the meantime, create a free account to be notified when the next
            cohort launches.
          </strong>{" "}
          {/* <br></br> <br></br>
          Do you have a business idea that you're eager to try out? Are you keen
          on learning more about this mastermind community? Create a free
          account to join our waitlist, and be notified on the launch of our
          next cohort. */}
        </Typography>
      </Grid>

      <Grid item xs={12} lg={5.5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mb: 1 }}>
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleLogin}
            sx={{ mt: 1 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      value="allowExtraEmails"
                      color="primary"
                    />
                  }
                  label="I want to receive updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
          {loading ? (
            <Box sx={{ padding: "2rem", mt: "2rem", textAlign: "center" }}>
              Loading . . .
            </Box>
          ) : (
            ""
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
