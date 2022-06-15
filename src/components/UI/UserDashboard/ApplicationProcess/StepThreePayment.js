import React from "react";

import { Typography, Box, Button } from "@mui/material";

const StepThreePayment = (props) => {
  return (
    <React.Fragment>
      <Typography variant="h5" sx={{ mt: "3rem", fontWeight: "bold" }}>
        Payment
      </Typography>
      <Button variant="outlined" sx={{ mt: "1rem" }}>
        Click here to pay
      </Button>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2, mt: "2rem" }}>
        <Button
          color="inherit"
          disabled={props.activeStep === 0}
          onClick={props.handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />

        <Button onClick={props.handleNext}>Next</Button>
      </Box>
    </React.Fragment>
  );
};

export default StepThreePayment;
