import { Fragment } from "react";

import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import HomePage from "./pages/HomePage";
import DirectoryPage from "./pages/DirectoryPage";
import SwagStorePage from "./pages/SwagStorePage";
import JoinTeamPage from "./pages/JoinTeamPage";
import ProfilePage from "./components/UI/ProfilePage/ProfilePage";
import UserDashboard from "./components/UI/UserDashboard/UserDashboard";

import { Route, Routes } from "react-router-dom";
import { Popover } from "@typeform/embed-react";
import { supabase } from "./api";
import { useEffect, useState } from "react";
import SignIn from "./pages/SupabaseLogin";
import SignUp from "./pages/SupabaseSignUp";

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
  const [session, setSession] = useState(null)

    useEffect(() => {
      setSession(supabase.auth.session())
  
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
    }, []);

  return (
    <ThemeProvider theme={theme}>
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
              <Route path="/directory/:id" element={<ProfilePage />} />
              <Route path="/joinTheTeam" element={<JoinTeamPage />} />
              <Route path="/join" element={!session ? <SignUp /> : <UserDashboard key={session.user.id} session={session} />} />
              <Route path="/login" element={!session ? <SignIn /> : <UserDashboard key={session.user.id} session={session} />} />
              <Route path="/profilePage" element={<ProfilePage />} />
              <Route path="/dashboard/*" element={!session ? <SignIn /> : <UserDashboard key={session.user.id} session={session} />}/>
            </Routes>
          </main>
          <Footer />
        </Box>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
