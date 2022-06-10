import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from "@mui/material/Paper";

import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/Context/AuthProvider";

const LogIn = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const { signIn } = useAuth();

    const history = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        // Get email and password input values
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // Calls `signIn` function from the context
        const { error } = await signIn({ email, password });

        if (error) {
        alert("error signing in");
        } else {
        // Redirect user to Dashboard
        history("/userDashboard");
        }
    }


  return (
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Grid item xs={12} lg={5.5} component={Paper} elevation={6} square sx={{ height: "700px" }}>
          <Box
            sx={{
              p: 2,
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                type="email" ref={emailRef}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                id="password"
                autoComplete="current-password"
                type="password" ref={passwordRef}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/join" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Container>
  );
}

export default LogIn;