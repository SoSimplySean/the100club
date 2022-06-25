import React from "react";
import { useState } from "react";

import { Typography, Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { supabase } from "../../../../api";

const validationSchema = yup.object({
  name: yup.string("Enter your name").required("Full Name is required"),
  linkedin: yup.string("Enter your LinkedIn").required("LinkedIn is required"),
  about: yup.string("Write one sentence").required("Write one sentence"),
  project: yup.string("Write one sentence").required("Write one sentence"),
});

const StepOneForm = (props) => {
  const [submitted, setSubmit] = useState(false);

  const handleSubmit = () => {
    setSubmit(true);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      linkedin: "",
      about: "",
      project: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      handleSubmit(true);
      alert(JSON.stringify(values, null, 2));
      let { error } = await supabase.from('applications').insert(values, {
        returning: "minimal", // Don't return the value after inserting
      });
      if (error) console.log("error", error);
      alert('successful');
    },
  });
 
  return (
    <React.Fragment>
      <Typography variant="h5" sx={{ mt: "3rem", mb: 1, fontWeight: "bold" }}>
        Cohort 001 Applications
      </Typography>
      <Typography variant="subtitle1">01 Aug - 08 Aug</Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Full Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          sx={{ mt: "2rem" }}
        />
        <TextField
          fullWidth
          id="linkedin"
          name="linkedin"
          label="LinkedIn"
          value={formik.values.linkedin}
          onChange={formik.handleChange}
          error={formik.touched.linkedin && Boolean(formik.errors.linkedin)}
          helperText={formik.touched.linkedin && formik.errors.linkedin}
          sx={{ mt: "2rem" }}
        />
        <TextField
          fullWidth
          id="about"
          name="about"
          label="Describe Yourself in One Sentence"
          value={formik.values.about}
          onChange={formik.handleChange}
          error={formik.touched.about && Boolean(formik.errors.about)}
          helperText={formik.touched.about && formik.errors.about}
          sx={{ mt: "2rem" }}
        />
        <TextField
          fullWidth
          id="project"
          name="project"
          label="Describe Your Entrepreneurial Endeavour in One Sentence"
          value={formik.values.project}
          onChange={formik.handleChange}
          error={formik.touched.project && Boolean(formik.errors.project)}
          helperText={formik.touched.project && formik.errors.project}
          sx={{ mt: "2rem" }}
        />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          sx={{ mt: "2rem" }}
        >
          Submit
        </Button>
      </form>

      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          color="inherit"
          disabled={props.activeStep === 0}
          onClick={props.handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />

        <Button onClick={props.handleNext} disabled={submitted === false}>
          Next
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default StepOneForm;
