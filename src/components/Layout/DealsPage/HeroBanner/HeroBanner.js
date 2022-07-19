import ImageGrid from "../../../UI/ImageGrid/ImageGrid";
import Button from "../../../UI/Button/Button";
import heroBannerImage from "../../../../assets/DealsPage/HeroBanner.png";
import { Grid, Typography } from "@mui/material";

const HeroBanner = (props) => {
  return (
    <Grid
      container
      spacing={6}
      alignItems="center"
      sx={{ mt: "1.5rem", my: "3rem" }}
    >
      <Grid item lg={6}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
          Save and explore with our{" "}
          <Typography
            variant="h3"
            component="span"
            sx={{ color: "secondary.main", fontWeight: "bold" }}
          >
            partners.
          </Typography>
        </Typography>
        <Typography variant="body1" sx={{ my: "2rem" }}>
          Get discounts with partners of The 100 Club. Simply show that you're a
          member of the community by flashing your 100Card at the outlet, and
          get exclusive perks.
        </Typography>
        <Button
          text="Download partnership deck"
          link="https://pdfhost.io/v/vb.0E4FTq_The_100_Club_Partnership_Deck_with_Members_Digital"
          target="_blank"
          symbol="arrow"
        />
        <Typography variant="body1" sx={{ mt: "1.6rem", mb: "0.6rem" }}>
          Want to become a partner? Reach out to sosimplysean@gmail.com
        </Typography>
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
