import Container from "../../UI/Container/Container";

import { Typography, Link, Grid, Box } from "@mui/material";

const styles = {
  container: {
    textAlign: "center",
    maxWidth: "600px",
    mb: "10rem",
    mx: "auto",
  },

  title: {
    mt: "3rem",
  },

  body: {
    mt: "0.3rem",
  },

  link: {
    "&:hover": { color: "secondary.main" },
    mt: "0.3rem",
  },
};

const Footer = (props) => {
  return (
    <Container>
      <Box sx={styles.container}>
        <Typography variant="h5" component="h3">
          the
          <Typography variant="h4" component="span" sx={{ fontWeight: "bold" }}>
            100
          </Typography>
          club
        </Typography>
        <Typography variant="h7" component="h4" sx={styles.title}>
          Our Vision.
        </Typography>
        <Typography variant="body1" sx={styles.body}>
          To help entrepreneurial individuals, be entrepreneurs.
        </Typography>

        <Typography variant="h7" component="h4" sx={styles.title}>
          Our Mission.
        </Typography>
        <Typography variant="body1" sx={styles.body}>
          To build a supportive community of action-takers, where every
          individual can network, seek advice, and stay accountable as they work
          towards their entrepreneurial goals.
        </Typography>

        {/* Links */}
        <Grid container direction="column" spacing={1}>
          <Typography variant="h7" component="h4" sx={styles.title}>
            Our Team.
          </Typography>
          <Link
            href="https://www.linkedin.com/in/seantansg/"
            underline="none"
            target="_blank"
            rel="noopener"
            sx={styles.link}
          >
            Sean Tan.
          </Link>
          <Link
            href="https://www.linkedin.com/in/joseph-ozl/"
            underline="none"
            target="_blank"
            rel="noopener"
            sx={styles.link}
          >
            Joseph Ong.
          </Link>
          <Link
            href="https://www.linkedin.com/in/shawn-kok/"
            underline="none"
            target="_blank"
            rel="noopener"
            sx={styles.link}
          >
            Shawn Kok.
          </Link>
          <Link
            href="https://www.linkedin.com/in/jonas-tan-1bbbb3202/"
            underline="none"
            target="_blank"
            rel="noopener"
            sx={styles.link}
          >
            Jonas Tan.
          </Link>
        </Grid>
      </Box>
    </Container>
  );
};

export default Footer;
