import ImageGrid from "../../../UI/ImageGrid/ImageGrid";
import Button from "../../../UI/Button/Button";
import heroBannerImage from "../../../../assets/JoinTeamPage/HeroBanner.png";
import { Grid, Typography } from "@mui/material";

const HeroBanner = (props) => {
  return (
    <Grid container spacing={6} alignItems="center" sx={{ mt: "1.5rem" }}>
      <Grid item lg={6}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
          Save and explore with our{" "}
          <Typography
            variant="h3"
            component="span"
            sx={{ color: "secondary.main", fontWeight: "bold" }}
          >
            partners
          </Typography>
        </Typography>
        <Typography variant="body1" sx={{ my: "2rem" }}>
          Get discounts with partners of The 100 Club. Simply show that you're a
          member of the community by flashing your 100Card at the outlet, and
          get exclusive perks.
        </Typography>
        <Button
          text="Want to become a partner?"
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
