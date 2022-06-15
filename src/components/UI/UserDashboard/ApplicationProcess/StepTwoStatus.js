import React from "react";

import { Typography, Box, Button } from "@mui/material";

const StepTwoStatus = (props) => {
  return (
    <React.Fragment>
      <Typography variant="h5" sx={{ mt: "3rem", fontWeight: "bold" }}>
        Outcome Status
      </Typography>
      <Button variant="outlined" sx={{ mt: "1rem" }}>
        In Progress
      </Button>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2, mt: "2rem" }}>
        <Button color="inherit" onClick={props.handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />

        <Button onClick={props.handleNext}>Next</Button>
      </Box>
    </React.Fragment>
  );
};

export default StepTwoStatus;
