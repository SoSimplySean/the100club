import { useEffect, useState } from "react";

import Button from "../Button/Button";
import { supabase } from "../../../api";

import { Grid, Typography, Avatar, Paper, Box, Chip } from "@mui/material";
import { useParams } from "react-router-dom";

const ProfilePage = (props) => {
  let [user, setUser] = useState({});
  let { id } = useParams();

  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);

  const getUser = async () => {
    const { data: user, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", id)
      .single();
    if (error) console.log(error);
    else {
      setUser(user);
      console.log(user);
    }
  };

  if (user === undefined) {
    return <Typography>Still loading...</Typography>;
  }

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: "4rem",
        mx: "auto",
        textAlign: "center",
      }}
    >
      <Avatar
        alt="Remy Sharp"
        src="https://picsum.photos/200"
        sx={{ width: 150, height: 150, mx: "auto" }}
      />
      <Typography
        variant="h3"
        component="h1"
        sx={{ fontWeight: "bold", mt: "2rem" }}
      >
        {user.fullName}
      </Typography>
      <Typography variant="h5" sx={{ mt: "0.5rem" }}>
        {user.title}
      </Typography>
      <Typography variant="body1" sx={{ my: "2rem" }}>
        Member of Cohort {user.cohort}
        <br></br>
        {user.mastermind === null
          ? "Still being matched into a mastermind"
          : `In Mastermind Group ${user.mastermind}`}
        <br></br>
      </Typography>
      <Box sx={{ display: "flex", mx: "auto" }}>
        <Button
          text="Add to Key Connections"
          link="https://t.me/MrRaincloud"
          inverted="true"
        />
        <Button
          text={`Chat with ${user.fullName}`}
          link="https://t.me/MrRaincloud"
        />
      </Box>
      <Paper
        elevation={4}
        sx={{ padding: "2rem", mt: "5rem", textAlign: "left" }}
      >
        <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }}>
          About {user.fullName}
        </Typography>
        <Typography variant="body1">{user.about}</Typography>
        <Typography
          variant="h6"
          component="h3"
          sx={{ fontWeight: "bold", mt: "2rem" }}
        >
          Age
        </Typography>
        <Typography variant="body1">{user.age}</Typography>
        <Typography
          variant="h6"
          component="h3"
          sx={{ fontWeight: "bold", mt: "2rem" }}
        >
          Skills & Interests
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
          {user.skills &&
            user.skills.map((value) => <Chip key={value} label={value} />)}
        </Box>
      </Paper>
      <Paper
        elevation={4}
        sx={{ padding: "2rem", mt: "3rem", textAlign: "left" }}
      >
        <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }}>
          About {user.companyName}
        </Typography>
        <Typography variant="body1">{user.companyAbout}</Typography>
        <Typography
          variant="h6"
          component="h3"
          sx={{ fontWeight: "bold", mt: "2rem" }}
        >
          Founded In
        </Typography>
        <Typography variant="body1">{user.founded}</Typography>
        <Typography
          variant="h6"
          component="h3"
          sx={{ fontWeight: "bold", mt: "2rem" }}
        >
          Industry
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
          {user.industry &&
            user.industry.map((value) => <Chip key={value} label={value} />)}
        </Box>
      </Paper>
      <Paper
        elevation={4}
        sx={{ padding: "2rem", mt: "3rem", textAlign: "left" }}
      >
        <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }}>
          Mastermind Group Members
        </Typography>

        {user.mastermind === null ? (
          <Typography variant="body1">
            Still being matched into a mastermind
          </Typography>
        ) : (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {user.mastermindMembers &&
              user.mastermindMembers.map((value) => (
                <Chip key={value} label={value} />
              ))}
          </Box>
        )}
      </Paper>
      <Paper
        elevation={4}
        sx={{ padding: "2rem", mt: "3rem", textAlign: "left" }}
      >
        <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }}>
          Contact
        </Typography>
        <Typography variant="body1">
          Email: {user.email}
          <br></br>
          LinkedIn: {user.linkedin}
          <br></br>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default ProfilePage;
