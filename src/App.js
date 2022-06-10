import { Fragment } from "react";

import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import HomePage from "./pages/HomePage";
import DirectoryPage from "./pages/DirectoryPage";
import SwagStorePage from "./pages/SwagStorePage";
import JoinTeamPage from "./pages/JoinTeamPage";
import ProfilePage from "./components/UI/ProfilePage/ProfilePage";

import { Route, Routes } from "react-router-dom";
import { Popover } from "@typeform/embed-react";

import { useState, useEffect } from 'react';
import { supabase } from './api';
import { AuthProvider } from "./components/Context/AuthProvider";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import UserDashboard from "./pages/UserDashboard";


import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
  Box,
} from "@mui/material";

let theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#00203F",
    },
    secondary: {
      main: "#85DDB5",
    },
    text: {
      primary: "#00203F",
    },
    info: {
      main: "#2E5994",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

const styles = {
  container: {
    width: { xs: "80%", sm: "70%" },
    maxWidth: "1300px",
    margin: "2.5rem auto",
  },
};

theme = responsiveFontSizes(theme);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async () =>
      checkUser()
    );
    checkUser();
    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  async function checkUser() {
    const user = supabase.auth.user();
    setUser(user);
  }
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Fragment>
          <Box sx={styles.container}>
            <Popover
              id="Wg8EdlDs"
              buttonColor="#00203F"
              customIcon="<span>&#9820;</span>"
              size="100"
            />
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/store" element={<SwagStorePage />} />
                <Route path="/directory" element={<DirectoryPage />} />
                <Route path="/joinTheTeam" element={<JoinTeamPage />} />
                <Route path="/join" element={<SignUp />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/profilePage" element={<ProfilePage />} />
                <Route path="/userDashboard" element={<UserDashboard />} />
                {
                  user && (
                    <Route path="/userDashboard" element={<UserDashboard />} />
                  )
                }
              </Routes>
            </main>
            <Footer />
          </Box>
        </Fragment>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
