import React, { Fragment } from "react";
import { Paper, Typography } from "@mui/material";

const Banner = () => {
  const [show] = React.useState(true);

  return (
    <Fragment>
      {show ? (
        <Paper
          sx={{
            padding: "0.3rem",
            display: "flex",
            backgroundColor: "primary.main",
          }}
          square
          elevation={0}
        >
          <Typography
            variant="subtitle2"
            sx={{
              textAlign: "center",
              flexGrow: "1",
              color: "white",
            }}
          >
            This membership platform is a WIP, but feel free to look around +
            create a free account :)
          </Typography>
        </Paper>
      ) : null}
    </Fragment>
  );
};

export default Banner;
