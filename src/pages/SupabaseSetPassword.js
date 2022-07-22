import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../api";

const SupabaseSetPassword = () => {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");

  const resetPassword = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      // email: data.get("email"),
      password: data.get("password"),
    });

    try {
      setLoading(true);
      //   const { error } = await supabase.auth.signIn({ email, password });
      const { error } = await supabase.auth.update({
        password: password,
      });

      if (error) throw error;
      alert("Password reset!");
      navigate("/dashboard", { replace: true });
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Grid
        item
        xs={12}
        lg={5.5}
        component={Paper}
        elevation={6}
        square
        sx={{ height: "300px" }}
      >
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <Box
            component="form"
            onSubmit={resetPassword}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Set Password
            </Button>
          </Box>
        </Box>
        {loading ? (
          <Box sx={{ padding: "2rem", mt: "2rem", textAlign: "center" }}>
            Loading . . .
          </Box>
        ) : (
          ""
        )}
      </Grid>
    </Container>
  );
};
export default SupabaseSetPassword;
