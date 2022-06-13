// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import { Auth, Typography, Button } from '@supabase/ui';
import { supabase } from "../api";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Container = (props) => {
  const { user } = Auth.useUser()
  if (user)
    return (
      <>
        <Typography.Text>Signed in: {user.email}</Typography.Text>
        <Button block onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </Button>
      </>
    )
  return props.children
}

export default function AuthBasic() {
  return (
    <Grid
      container
      component="main"
      sx={{ height: "1200px", mt: "5rem", justifyContent: "space-between" }}
    >
      <CssBaseline />
      <Grid item xs={12} lg={5.5}>
        <Typography.Title level={1} style={{color: "#00203F"}}>
          Want to be part of our next cohort?{" "}
          
          Join the waitlist today!
        </Typography.Title>
        <br></br>
        <br></br>
        <Typography variant="body1" sx={{ my: "2rem" }}>
          Our mastermind applications are currently
          <Typography.Text style={{fontWeight: "bold"}}>
            {" "}
            closed!
          </Typography.Text>
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
          <Auth.UserContextProvider supabaseClient={supabase}>
            <Container supabaseClient={supabase}>
              <Auth supabaseClient={supabase} />
            </Container>
          </Auth.UserContextProvider>
        </Box>
      </Grid>
    </Grid>
    
  )
}