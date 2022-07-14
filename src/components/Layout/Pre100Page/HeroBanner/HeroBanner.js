import ImageGrid from "../../../UI/ImageGrid/ImageGrid";
import Button from "../../../UI/Button/Button";
import heroBannerImage from "../../../../assets/Pre100Page/HeroBannerImg.png";

import { Grid, Typography } from "@mui/material";

const HeroBanner = (props) => {
  return (
    <Grid container spacing={6} alignItems="center" sx={{ mt: "1.5rem" }}>
      <Grid item lg={6}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
          Don't have a business yet? Join{" "}
          <Typography
            variant="h4"
            component="span"
            sx={{ color: "secondary.main", fontWeight: "bold" }}
          >
            The Pre-100 Club.
          </Typography>
        </Typography>
        <Typography variant="body1" sx={{ my: "2rem" }}>
          The Pre-100 Club is a way for us to help aspiring entrepreneurs who
          don’t have a business yet, and aren’t able to join The 100 Club.{" "}
          <b>The Pre-100 Club is launched in partnership with societies</b> and
          we offer to help their members form mastermind groups through our
          system, and get them exclusive mentorship.
        </Typography>

        <Button
          text="Become a partner society"
          link="mailto:sosimplysean@gmail.com"
          target="_blank"
          symbol="arrow"
        />
      </Grid>
      <ImageGrid
        // screenSize={"lg"}
        gridSize={6}
        src={heroBannerImage}
        alt={"Hero Banner"}
        maxWidth={{ maxWidth: "400px" }}
      />
    </Grid>
  );
};

export default HeroBanner;
