import Button from "../Button/Button";

import { Grid, Typography, Avatar, Paper, Box } from "@mui/material";

const ProfilePage = (props) => {
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
        Paul Atreides
      </Typography>
      <Typography variant="h5" sx={{ mt: "0.5rem" }}>
        Founder of Dune
      </Typography>
      <Typography variant="body1" sx={{ my: "2rem" }}>
        Member of Cohort 008<br></br>
        In Mastermind Group 002<br></br>
        From Singapore
      </Typography>
      <Box sx={{ display: "flex", mx: "auto" }}>
        <Button
          text="Add to Key Connections"
          link="https://t.me/MrRaincloud"
          inverted="true"
        />
        <Button text="Chat with Paul" link="https://t.me/MrRaincloud" />
      </Box>
      <Paper
        elevation={4}
        sx={{ padding: "2rem", mt: "5rem", textAlign: "left" }}
      >
        <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }}>
          About Paul
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          perspiciatis est aspernatur, doloremque veritatis harum iste eius modi
          mollitia nostrum debitis incidunt blanditiis nobis. Commodi!
        </Typography>
        <Typography
          variant="h6"
          component="h3"
          sx={{ fontWeight: "bold", mt: "2rem" }}
        >
          Age Group
        </Typography>
        <Typography variant="body1">25-34</Typography>
        <Typography
          variant="h6"
          component="h3"
          sx={{ fontWeight: "bold", mt: "2rem" }}
        >
          Skills & Interests
        </Typography>
        <Typography variant="body1">Lorem ipsum dolor sit amet.</Typography>
        <Typography
          variant="h6"
          component="h3"
          sx={{ fontWeight: "bold", mt: "2rem" }}
        >
          Paul's current goal is to:
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente,
          esse!
        </Typography>
      </Paper>
      <Paper
        elevation={4}
        sx={{ padding: "2rem", mt: "3rem", textAlign: "left" }}
      >
        <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }}>
          About Dune
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          perspiciatis est aspernatur, doloremque veritatis harum iste eius modi
          mollitia nostrum debitis incidunt blanditiis nobis. Commodi!
        </Typography>
        <Typography
          variant="h6"
          component="h3"
          sx={{ fontWeight: "bold", mt: "2rem" }}
        >
          Founded In
        </Typography>
        <Typography variant="body1">2020</Typography>
        <Typography
          variant="h6"
          component="h3"
          sx={{ fontWeight: "bold", mt: "2rem" }}
        >
          Industry
        </Typography>
        <Typography variant="body1">F&B</Typography>
      </Paper>
      <Paper
        elevation={4}
        sx={{ padding: "2rem", mt: "3rem", textAlign: "left" }}
      >
        <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }}>
          Mastermind Group
        </Typography>
        <Typography variant="body1">
          Lorem, ipsum dolor.<br></br>
          Lorem, ipsum dolor.<br></br>
          Lorem, ipsum dolor.<br></br>
        </Typography>
      </Paper>
      <Paper
        elevation={4}
        sx={{ padding: "2rem", mt: "3rem", textAlign: "left" }}
      >
        <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }}>
          Contact
        </Typography>
        <Typography variant="body1">
          Slack: @PaulAtreides<br></br>
          Email: dune@gmail.com<br></br>
          LinkedIn: dune@linkedin.com<br></br>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default ProfilePage;
