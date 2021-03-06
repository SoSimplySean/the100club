import { Fragment } from "react";

import Banner from "./components/Layout/Banner/Banner";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import HomePage from "./pages/HomePage";
import DirectoryPage from "./pages/DirectoryPage";
import SwagStorePage from "./pages/SwagStorePage";
import Pre100Page from "./pages/Pre100Page";
import SwagPage from "./components/UI/SwagPage/SwagPage";
import JoinTeamPage from "./pages/JoinTeamPage";
import DealsPage from "./pages/DealsPage";
import ProfilePage from "./components/UI/ProfilePage/ProfilePage";
import UserDashboard from "./components/UI/UserDashboard/UserDashboard";
import CartPage from "./pages/Cart";

import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
// import { Popover } from "@typeform/embed-react";
import { supabase } from "./api";
import { useEffect, useState } from "react";
import SignIn from "./pages/SupabaseLogin";
import SignUp from "./pages/SupabaseSignUp";
import SetPassword from "./pages/SupabaseSetPassword";

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
    width: { xs: "90%", sm: "70%" },
    maxWidth: "1300px",
    margin: "2.5rem auto",
  },
};

theme = responsiveFontSizes(theme);

function App() {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState({});
  let navigate = useNavigate();

  useEffect(
    () => {
      setSession(supabase.auth.session());

      supabase.auth.onAuthStateChange((event, session) => {
        setSession(session);
        if (event === "PASSWORD_RECOVERY") {
          navigate("setPassword", { replace: true });
        }
      });

      const user = supabase.auth.user();
      if (user) {
        getProfile(user);
      }
    },
    // eslint-disable-next-line
    [session]
  );

  const getProfile = async (user) => {
    try {
      let { data, error, status } = await supabase
        .from("profiles")
        .select(`*`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUser(data);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      console.log(user);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Banner />
        <Box sx={styles.container}>
          {/* <Popover
            id="Wg8EdlDs"
            buttonColor="#00203F"
            customIcon="<span>&#9820;</span>"
            size="100"
          /> */}
          <Header session={session} />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/store"
                element={<SwagStorePage session={session} user={user} />}
              />
              <Route path="/store/:id" element={<SwagPage />} />
              <Route
                path="/directory"
                element={<DirectoryPage session={session} user={user} />}
              />
              <Route path="/directory/:id" element={<ProfilePage />} />
              <Route path="/pre100" element={<Pre100Page />} />
              <Route path="/joinTheTeam" element={<JoinTeamPage />} />
              <Route path="/deals" element={<DealsPage />} />
              <Route
                path="/join"
                element={!session ? <SignUp /> : <Navigate to="/dashboard" />}
              />
              <Route
                path="/login"
                element={!session ? <SignIn /> : <Navigate to="/dashboard" />}
              />
              <Route path="/setPassword" element={<SetPassword />} />
              <Route path="/profilePage" element={<ProfilePage />} />
              <Route
                path="/dashboard/*"
                element={
                  !session ? (
                    <SignIn />
                  ) : (
                    <UserDashboard
                      key={session.user.id}
                      session={session}
                      user={user}
                    />
                  )
                }
              />
              <Route
                path="/cart"
                element={
                  session && (
                    <CartPage key={session.user.id} session={session} />
                  )
                }
              />
            </Routes>
          </main>
          <Footer />
        </Box>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
