import * as React from "react";

import StepOneForm from "./StepOneForm";
import StepTwoStatus from "./StepTwoStatus";
import StepThreePayment from "./StepThreePayment";
import Completed from "./Completed";

import { Paper, Button, Box } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["Application Form", "Outcome Status", "Payment"];

export default function HorizontalLinearStepper({ session, membershipLevel }) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const content = () => {
    switch (activeStep) {
      case 0:
        return (
          <StepOneForm
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
            steps={steps}
          />
        );
      case 1:
        return (
          <StepTwoStatus
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
            steps={steps}
          />
        );
      case 2:
        return (
          <StepThreePayment
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
            steps={steps}
          />
        );
      default:
        return <Completed handleReset={handleReset} />;
    }
  };

  return (
    <Paper
      elevation={4}
      sx={{
        mt: "2rem",
        textAlign: "left",
        width: "100%",
        position: "relative",
      }}
    >
      <Box
        id="overlay"
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backdropFilter: "blur(8px)",
          zIndex: "1000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="contained">
          {" "}
          {membershipLevel === "member"
            ? "You are already a member"
            : "Cohort applications are currently closed"}
        </Button>
      </Box>
      <Paper
        sx={{
          padding: "2rem",
        }}
      >
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {content()}
      </Paper>
    </Paper>
  );
}
