import ImageGrid from "../../../UI/ImageGrid/ImageGrid";
import Button from "../../../UI/Button/Button";
import heroBannerImage from "../../../../assets/HomePage/HeroBannerImg.png";

import { Grid, Typography } from "@mui/material";

const HeroBanner = (props) => {
  return (
    <Grid container spacing={6} alignItems="center" sx={{ mt: "1.5rem" }}>
      <Grid item lg={6}>
        {/* <Typography variant="h5" component="h3">
          the
          <Typography variant="h4" component="span" sx={{ fontWeight: "bold" }}>
            100
          </Typography>
          club
        </Typography> */}
        <Typography variant="h2" component="h1" sx={{ fontWeight: "bold" }}>
          Exclusive{" "}
          <Typography
            variant="h2"
            component="span"
            sx={{ color: "secondary.main", fontWeight: "bold" }}
          >
            network
          </Typography>
          <br></br> for Singaporean<br></br> entrepreneurs.
        </Typography>
        <Typography variant="body1" sx={{ my: "2rem" }}>
          The 100 Club, is a mastermind community, that matches entrepreneurial
          individuals into groups of 4, in order for them to support each other
          in staying accountable, sharing advice, and networking to grow their
          business.
        </Typography>
        <Button
          text="Join Waitlist"
          typeform="true"
          // link="https://t.me/JoinThe100Club"
          symbol="arrow"
        />
        <Typography variant="body1" sx={{ mt: "1.6rem", mb: "0.6rem" }}>
          Cohort 001 application: <b>01 Aug 22 - 08 Aug 22</b>
        </Typography>
        <Typography variant="body1">
          In the mean time, join our waitlist to stay updated.
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
