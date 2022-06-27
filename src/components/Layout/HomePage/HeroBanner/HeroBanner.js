import ImageGrid from "../../../UI/ImageGrid/ImageGrid";
import Button from "../../../UI/Button/Button";
import heroBannerImage from "../../../../assets/HomePage/HeroBannerImg.png";

import { Grid, Typography } from "@mui/material";

const HeroBanner = (props) => {
  return (
    <Grid container spacing={6} alignItems="center" sx={{ mt: "1.5rem" }}>
      <Grid item lg={6}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
          Exclusive{" "}
          <Typography
            variant="h3"
            component="span"
            sx={{ color: "secondary.main", fontWeight: "bold" }}
          >
            network
          </Typography>
          <br></br>
          for Singaporean entrepreneurs.
        </Typography>
        <Typography variant="body1" sx={{ my: "2rem" }}>
          The 100 Club, is a mastermind community, that matches entrepreneurs
          into groups of 4, that meet regularly, in order for them to support
          each other in staying accountable, sharing advice, and networking to
          grow their business.
        </Typography>
        <Button
          text="Join Waitlist"
          typeform="true"
          // link="https://t.me/JoinThe100Club"
          symbol="arrow"
        />
        <Typography variant="body1" sx={{ mt: "1.6rem", mb: "0.6rem" }}>
          Cohort 002 application: <b>01 Oct 22 - 08 Oct 22</b>
        </Typography>
        <Typography variant="body1">
          In the mean time, create a free account to join our waitlist.
        </Typography>
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
