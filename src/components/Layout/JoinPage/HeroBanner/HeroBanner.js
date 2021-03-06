import ImageGrid from "../../../UI/ImageGrid/ImageGrid";
import Button from "../../../UI/Button/Button";
import heroBannerImage from "../../../../assets/JoinTeamPage/HeroBanner.png";
import { Grid, Typography } from "@mui/material";

const HeroBanner = (props) => {
  return (
    <Grid container spacing={6} alignItems="center" sx={{ mt: "1.5rem" }}>
      <Grid item lg={6}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
          Interested to find <br></br>out more?{" "}
          <Typography
            variant="h3"
            component="span"
            sx={{ color: "secondary.main", fontWeight: "bold" }}
          >
            Join <br></br>
          </Typography>{" "}
          the waitlist now! 
        </Typography>
        <Typography variant="body1" sx={{ my: "2rem" }}>
          Are you looking to be part of something meaningful, impactful, and
          epic? Do you want to expand your network, skillsets, and knowledge?
          Are you driven and passionate about what you do? If so, we want you.
          
        </Typography>
        <Button
          text="Chat with Sean"
          link="https://t.me/MrRaincloud"
          symbol="arrow"
        />
      </Grid>
      <ImageGrid
        gridSize={6}
        src={heroBannerImage}
        alt={"Hero Banner"}
        maxWidth={{ maxWidth: "400px" }}
      />
    </Grid>
  );
};

export default HeroBanner;
