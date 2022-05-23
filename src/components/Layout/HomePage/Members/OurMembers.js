// import css from "./OurMembers.module.css";

import logo1 from "../../../../assets/HomePage/logo1.png";
import logo2 from "../../../../assets/HomePage/logo2.png";
import logo3 from "../../../../assets/HomePage/logo3.png";
import logo4 from "../../../../assets/HomePage/logo4.png";
import logo5 from "../../../../assets/HomePage/logo5.png";
import logo6 from "../../../../assets/HomePage/logo6.png";
import logo7 from "../../../../assets/HomePage/logo7.png";
import logo8 from "../../../../assets/HomePage/logo8.png";
import logo9 from "../../../../assets/HomePage/logo9.png";
import logo10 from "../../../../assets/HomePage/logo10.png";
import logo11 from "../../../../assets/HomePage/logo11.png";
import logo12 from "../../../../assets/HomePage/logo12.png";
import Container from "../../../UI/Container/Container";

import { Grid, Typography } from "@mui/material";

let logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
];

const OurMembers = (props) => {
  return (
    <Container>
      <Typography variant="h5" component="h2" sx={{ fontWeight: "bold" }}>
        our members.
      </Typography>
      <Grid
        columnSpacing={{ xs: 4, md: 3, lg: 2 }}
        rowSpacing={3}
        container
        sx={{ mt: "1rem" }}
      >
        {/* FIND OUT HOW TO GET THIS TO WORK. Pointer can't be built with string */}
        {Array.from(Array(12)).map((_, index) => (
          <Grid item sm={4} md={3} lg={2} key={index}>
            <img
              src={logos[index]}
              alt={`logo${index + 1}`}
              style={{ maxWidth: "100px" }}
            ></img>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OurMembers;
