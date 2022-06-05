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

import { useState, useEffect } from 'react'
import { supabase } from '../api'

export default function SignUp() {
    const [loading, setLoading] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState(null)
    const [session, setSession] = useState(null)
    
    useEffect(() => {
        setSession(supabase.auth.session())
    
        supabase.auth.onAuthStateChange((_event, session) => {
          setSession(session)
        })
      }, [])

    useEffect(() => {
        console.log(session)
        console.log("swerwewdasdsd")
        if (session) getProfile();
    }, [session]);

    // okay basically here i need to setEmail or setUdername for every event
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     console.log({
    //     email: data.get("email"),
    //     password: data.get("password"),
    //     username: data.get("username"),
    //     });
    //     for (var key of data.keys()) {
    //       if (key === "username") {
    //         setUsername(data.get("username"));
    //       } else if (key === "email") {
    //         setUsername(data.get("email"));
    //       } else if (key === "password") {
    //         setUsername(data.get("password"));
    //       }
    //     }
    // };

    const handleLogin = async (e) => {
      e.preventDefault()
  
      try {
        setLoading(true)
        const { error } = await supabase.auth.signUp({ username, email, password })
        if (error) throw error
        alert('Thanks for signing up!')
      } catch (error) {
        alert(error.error_description || error.message)
      } finally {
        setLoading(false)
      }
    }

    const getProfile = async () => {
      try {
        setLoading(true)
        const user = supabase.auth.user()
  
        let { data, error, status } = await supabase
          .from('profiles')
          .select(`username, email, password`)
          .eq('id', user.id)
          .single()
  
        if (error && status !== 406) {
          throw error
        }
  
        if (data) {
          setUsername(data.username)
          setEmail(data.email)
          setPassword(data.password)
        }
      } catch (error) {
        alert(error.message)
      } finally {
        setLoading(false)
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
            onSubmit={handleLogin}
            sx={{ mt: 1 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoFocus
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
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
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
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
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>

          </Box>
          {loading ? <p>Loading</p> : ""}
        </Box>
      </Grid>
    </Grid>
  );
}
