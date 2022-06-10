import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/Context/AuthProvider";

const SignUp = (props) => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const { signUp } = useAuth();

    const history = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        // Get email and password input values
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // Calls `signUp` function from the context
        const { error } = await signUp({ email, password });

        if (error) {
        alert("error signing in");
        } else {
        // Redirect user to Dashboard
        history("/userDashboard");
        }
    }

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
            Join
          </Typography>{" "}
          the waitlist today!
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
          Right now we have a group of entrepreneurs piloting our first ever
          mastermind cohort. The next round of applications for the pro
          membership will reopen in July of 2022. In the meantime, create a free
          account to be notified when the next cohort launches. <br></br>{" "}
          <br></br>
          Do you have a business idea that you're eager to try out? Are you keen
          on learning more about this mastermind community? Create a free
          account to join our waitlist, and be notified on the launch of our
          next cohort.
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
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  autoComplete="off"
                  id="input-email" type="email" ref={emailRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  autoComplete="off"
                  id="input-password" type="password" ref={passwordRef}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
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
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>

          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SignUp;
