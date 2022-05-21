import css from "./TextImage.module.css";

import ImageGrid from "../../UI/ImageGrid/ImageGrid";

import { Typography, Grid } from "@mui/material";

const TextImage = (props) => {
  // Swaps the horizontal order depending on prop
  if (props.imageThenText) {
    return (
      <Grid
        container
        spacing={6}
        sx={{ mt: "6rem" }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <ImageGrid
          gridSize={6}
          src={props.src}
          alt={props.alt}
          maxWidth={props.maxWidth}
        />
        <Grid item lg={6} className={css.textContainer}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: "bold", mb: "1.2rem" }}
          >
            {props.header}
          </Typography>
          <Typography variant="body1">{props.paragraph}</Typography>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid
        container
        spacing={6}
        sx={{ mt: "6rem" }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={6}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: "bold", mb: "1.2rem" }}
          >
            {props.header}
          </Typography>
          <Typography variant="body1">{props.paragraph}</Typography>
        </Grid>
        <ImageGrid
          gridSize={6}
          src={props.src}
          alt={props.alt}
          maxWidth={props.maxWidth}
        />
      </Grid>
    );
  }
};

export default TextImage;
