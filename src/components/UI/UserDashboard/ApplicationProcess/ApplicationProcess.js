import * as React from "react";

import StepOneForm from "./StepOneForm";
import StepTwoStatus from "./StepTwoStatus";
import StepThreePayment from "./StepThreePayment";
import Completed from "./Completed";

import { Paper } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["Application Form", "Outcome Status", "Payment"];

export default function HorizontalLinearStepper() {
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
        padding: "2rem",
        mt: "2rem",
        textAlign: "left",
        width: "100%",
      }}
    >
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography variant="caption">Optional</Typography>
          //   );
          // }
          // if (isStepSkipped(index)) {
          //   stepProps.completed = false;
          // }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {content()}
    </Paper>
  );
}
