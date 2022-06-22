import React from "react";

import {
  Grid,
  Paper,
  Typography,
  Avatar,
  MenuItem,
  Tooltip,
  Chip,
  TextField,
  Button,
  Box,
} from "@mui/material";

import { useState, useEffect } from "react";
import { supabase } from "../../../api";

// ******************************************************************************************************************************

const EditProfile = ({ session }) => {
  const [loading, setLoading] = useState(true);

  const [fullName, setFullName] = useState(null);
  const [about, setAbout] = useState(null);
  const [title, setTitle] = useState(null);
  const [age, setAge] = useState(null);
  const [skills, setSkills] = useState(null);
  const [objective, setObjective] = useState(null);

  const [companyName, setCompanyName] = useState(null);
  const [companyAbout, setCompanyAbout] = useState(null);
  const [founded, setFounded] = useState(null);
  const [industry, setIndustry] = useState(null);

  const [linkedin, setLinkedIn] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  const getProfile = async () => {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      let { data, error, status } = await supabase
        .from("profiles")
        .select(
          `fullName, title, about, age, skills, objective, companyName, companyAbout, founded, industry, linkedin, email`
        )
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setLinkedIn(data.linkedin);
        setEmail(data.email);
        setFullName(data.fullName);
        setAbout(data.about);
        setTitle(data.title);
        setAge(data.age);
        setSkills(data.skills);
        setObjective(data.objective);
        setCompanyName(data.companyName);
        setCompanyAbout(data.companyAbout);
        setFounded(data.founded);
        setIndustry(data.industry);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const user = supabase.auth.user();

      const updates = {
        id: user.id,
        linkedin,
        email,
        about,
        title,
        age,
        skills,
        objective,
        companyName,
        companyAbout,
        founded,
        industry,
        updated_at: new Date(),
      };

      let { error } = await supabase.from("profiles").upsert(updates, {
        returning: "minimal", // Don't return the value after inserting
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div aria-live="polite">
      {loading ? (
        "Saving ..."
      ) : (
        <Grid>
          <Box
            component="form"
            onSubmit={updateProfile}
            noValidate
            sx={{ mt: 1 }}
          >
            <Paper
              elevation={4}
              sx={{ padding: "2rem", mt: "2rem", textAlign: "center" }}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://picsum.photos/200"
                sx={{ width: 150, height: 150, mx: "auto" }}
              />
              <Typography
                variant="subtitle2"
                sx={{ mt: "1.5rem", maxWidth: "250px", mx: "auto" }}
              >
                Image must be .jpg or .png with minimum size of 160x160 pixels.
              </Typography>
              <Tooltip title="You are currently part of our waitlist. Apply in the next cohort to become a member of The 100 Club.">
                <Chip
                  label="Waitlist Member"
                  color="primary"
                  sx={{ mt: "1.5rem" }}
                />
              </Tooltip>
            </Paper>
            {/* <Paper
              elevation={4}
              sx={{ padding: "2rem", mt: "2rem", textAlign: "left" }}
            >
              <Typography
                variant="subtitle1"
                component="h3"
                sx={{ fontWeight: "bold" }}
              >
                Email: {session.user.email}
              </Typography>
            </Paper> */}
            <Paper
              elevation={4}
              sx={{ padding: "2rem", mt: "2rem", textAlign: "left" }}
            >
              {/* FULL NAME */}
              <Typography
                variant="subtitle2"
                component="h3"
                sx={{ fontWeight: "bold" }}
              >
                Full Name
              </Typography>
              <TextField
                hiddenLabel
                multiline
                rows={1}
                fullWidth
                size="small"
                variant="outlined"
                id="age"
                type="url"
                value={fullName || ""}
                onChange={(e) => setFullName(e.target.value)}
                sx={{ mb: "1.5rem" }}
              />

              {/* TITLE */}
              <Typography
                variant="subtitle2"
                component="h3"
                sx={{ fontWeight: "bold" }}
              >
                Title
              </Typography>
              <TextField
                hiddenLabel
                multiline
                rows={1}
                fullWidth
                size="small"
                variant="outlined"
                id="age"
                type="url"
                value={title || ""}
                onChange={(e) => setTitle(e.target.value)}
                sx={{ mb: "1.5rem" }}
              />

              {/* ABOUT YOU */}
              <Typography
                variant="subtitle2"
                component="h3"
                sx={{ fontWeight: "bold" }}
              >
                Describe yourself in one line
              </Typography>
              <TextField
                hiddenLabel
                multiline
                rows={3}
                fullWidth
                size="small"
                variant="outlined"
                id="about"
                type="url"
                value={about || ""}
                onChange={(e) => setAbout(e.target.value)}
                sx={{ mb: "1.5rem" }}
              />

              {/* AGE */}
              <Typography
                variant="subtitle2"
                component="h3"
                sx={{ fontWeight: "bold" }}
              >
                How old are you?
              </Typography>
              <TextField
                hiddenLabel
                multiline
                rows={1}
                fullWidth
                size="small"
                variant="outlined"
                id="age"
                type="url"
                value={age || ""}
                onChange={(e) => setAge(e.target.value)}
                sx={{ mb: "1.5rem" }}
              />

              {/* SKILLS & INTERESTS */}
              <Typography
                variant="subtitle2"
                component="h3"
                sx={{ fontWeight: "bold" }}
              >
                What are your skills & interests?
              </Typography>
              <TextField
                hiddenLabel
                size="small"
                value={""}
                select
                fullWidth
                onChange={(e) => setSkills(e.target.value)}
              >
                <MenuItem key={1} value={"Marketing Pipelines"}>
                  Marketing Pipelines
                </MenuItem>
                <MenuItem key={1} value={"UI/UX Design"}>
                  UI/UX Design
                </MenuItem>
              </TextField>

              {/* NETWORKING OBJECTIVES */}
              <Typography
                variant="subtitle2"
                component="h3"
                sx={{ fontWeight: "bold", mt: "1.5rem" }}
              >
                What is your objective here?
              </Typography>
              <TextField
                hiddenLabel
                size="small"
                value={""}
                select
                fullWidth
                onChange={(e) => setObjective(e.target.value)}
              >
                <MenuItem key={1} value={"Find a co-founder"}>
                  Find a co-founder
                </MenuItem>
                <MenuItem key={1} value={"Find suitable support partners"}>
                  Find suitable support partners
                </MenuItem>
              </TextField>
            </Paper>

            <Paper
              elevation={4}
              sx={{ padding: "2rem", mt: "2rem", textAlign: "left" }}
            >
              {/* COMPANY NAME */}
              <Typography
                variant="subtitle2"
                component="h3"
                sx={{ fontWeight: "bold" }}
              >
                Company Name
              </Typography>
              <TextField
                hiddenLabel
                multiline
                rows={1}
                fullWidth
                size="small"
                variant="outlined"
                id="companyName"
                type="url"
                value={companyName || ""}
                onChange={(e) => setCompanyName(e.target.value)}
                sx={{ mb: "1.5rem" }}
              />

              {/* ABOUT YOUR COMPANY */}
              <Typography
                variant="subtitle2"
                component="h3"
                sx={{ fontWeight: "bold" }}
              >
                Describe your company in one line
              </Typography>
              <TextField
                hiddenLabel
                multiline
                rows={3}
                fullWidth
                size="small"
                variant="outlined"
                id="companyAbout"
                type="url"
                value={companyAbout || ""}
                onChange={(e) => setCompanyAbout(e.target.value)}
                sx={{ mb: "1.5rem" }}
              />

              {/* FOUNDED IN */}
              <Typography
                variant="subtitle2"
                component="h3"
                sx={{ fontWeight: "bold" }}
              >
                When was your company founded?
              </Typography>
              <TextField
                hiddenLabel
                multiline
                rows={1}
                fullWidth
                size="small"
                variant="outlined"
                id="founded"
                type="url"
                value={founded || ""}
                onChange={(e) => setFounded(e.target.value)}
                sx={{ mb: "1.5rem" }}
              />

              {/* INDUSTRY */}
              <Typography
                variant="subtitle2"
                component="h3"
                sx={{ fontWeight: "bold" }}
              >
                What industry does your company operate in?
              </Typography>
              <TextField
                hiddenLabel
                size="small"
                value={""}
                select
                fullWidth
                onChange={(e) => setIndustry(e.target.value)}
              >
                <MenuItem key={1} value={"Ecommerce"}>
                  Ecommerce
                </MenuItem>
                <MenuItem key={1} value={"Healthcare Tech"}>
                  Healthcare Tech
                </MenuItem>
              </TextField>
            </Paper>

            <Paper
              elevation={4}
              sx={{ padding: "2rem", mt: "2rem", textAlign: "left" }}
            >
              {/* EMAIL */}
              <Typography
                variant="subtitle2"
                component="h3"
                sx={{ fontWeight: "bold", mt: "1.5rem" }}
              >
                Email
              </Typography>
              <TextField
                hiddenLabel
                multiline
                rows={1}
                fullWidth
                size="small"
                variant="outlined"
                id="email"
                type="url"
                value={email || ""}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: "1.5rem" }}
              />

              {/* LINKEDIN */}
              <Typography
                variant="subtitle2"
                component="h3"
                sx={{ fontWeight: "bold" }}
              >
                LinkedIn
              </Typography>
              <TextField
                hiddenLabel
                multiline
                rows={1}
                fullWidth
                size="small"
                variant="outlined"
                id="linkedin"
                type="url"
                value={linkedin || ""}
                onChange={(e) => setLinkedIn(e.target.value)}
                sx={{ mb: "1.5rem" }}
              />
            </Paper>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 3 }}
            >
              Update Profile
            </Button>
          </Box>
        </Grid>
      )}

      <Button
        type="button"
        fullWidth
        variant="contained"
        color="secondary"
        onClick={() => supabase.auth.signOut()}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default EditProfile;
