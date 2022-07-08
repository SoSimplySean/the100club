import React from "react";

import {
  Grid,
  Paper,
  Typography,
  MenuItem,
  Tooltip,
  Chip,
  TextField,
  Button,
  Box,
  Select,
  OutlinedInput,
} from "@mui/material";

import { useState, useEffect } from "react";
import { supabase } from "../../../api";
import Avatarr from "../Avatar/Avatar";

// ******************************************************************************************************************************

const EditProfile = ({ session, membershipLevel }) => {
  const [loading, setLoading] = useState(true);

  const [fullName, setFullName] = useState(null);
  const [about, setAbout] = useState(null);
  const [title, setTitle] = useState(null);
  const [age, setAge] = useState(null);
  const [skills, setSkills] = useState([]);

  const [companyName, setCompanyName] = useState(null);
  const [companyAbout, setCompanyAbout] = useState(null);
  const [founded, setFounded] = useState(null);
  const [industry, setIndustry] = useState([]);

  const [linkedin, setLinkedIn] = useState(null);
  const [email, setEmail] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  const skillsList = [
    "Bootstrapping",
    "Building a team",
    "Content marketing",
    "Conversion rate optimization",
    "Copywriting",
    "Customer success",
    "Data science",
    "Design / UX",
    "Email marketing",
    "Facebook ads",
    "Go to market strategy",
    "Google ads",
    "Growth marketing",
    "Idea validation",
    "Link building",
    "Operations",
    "Marketing automation",
    "No-code",
    "Performance marketing",
    "PPC strategies",
    "Pricing strategy",
    "Product analytics",
    "Product management",
    "Product market fit",
    "Public relations",
    "Raising funding",
    "Sales",
    "SEO",
    "Social media",
    "User research",
    "Web Development",
  ];

  const industryList = [
    "Creative Agency",
    "Food",
    "SaaS",
    "Medtech",
    "Entertainment",
    "eCommerce",
    "Marketplace",
    "Membership Platform",
  ];

  const handleSkillsChange = (event) => {
    const {
      target: { value },
    } = event;
    setSkills(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleIndustryChange = (event) => {
    const {
      target: { value },
    } = event;
    setIndustry(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const getProfile = async () => {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      let { data, error, status } = await supabase
        .from("profiles")
        .select(
          `fullName, title, about, age, skills, companyName, companyAbout, founded, industry, linkedin, email, avatar_url`
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
        setCompanyName(data.companyName);
        setCompanyAbout(data.companyAbout);
        setFounded(data.founded);
        setIndustry(data.industry);
        setAvatarUrl(data.avatar_url);
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
        companyName,
        companyAbout,
        founded,
        avatar_url,
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
              <Box
                className="form-widget"
                sx={{ width: 150, height: 150, mx: "auto", mb: "35px" }}
              >
                {/* Add to the body */}
                <Avatarr
                  url={avatar_url}
                  size={150}
                  onUpload={(url) => {
                    setAvatarUrl(url);
                    updateProfile({ avatar_url: url });
                  }}
                />
                {/* ... */}
              </Box>
              {/* <Avatar
                alt="Remy Sharp"
                src="https://picsum.photos/200"
                sx={{ width: 150, height: 150, mx: "auto" }}
              /> */}
              <Typography
                variant="subtitle2"
                sx={{ mt: "1.5rem", maxWidth: "250px", mx: "auto" }}
              >
                Image must be .jpg or .png with minimum size of 160x160 pixels.
              </Typography>
              <Tooltip title="You are currently part of our waitlist. Apply in the next cohort to become a member of The 100 Club.">
                <Chip
                  label={
                    membershipLevel !== "member"
                      ? "Waitlist Member"
                      : "The 100 Club Member"
                  }
                  color="primary"
                  sx={{ mt: "1.5rem" }}
                />
              </Tooltip>
            </Paper>
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
                fullWidth
                size="small"
                variant="outlined"
                id="fullName"
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
                fullWidth
                size="small"
                variant="outlined"
                id="title"
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
              <Select
                fullWidth
                size="small"
                multiple
                value={skills || ""}
                onChange={handleSkillsChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
              >
                {skillsList.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
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
              <Select
                fullWidth
                size="small"
                multiple
                value={industry || ""}
                onChange={handleIndustryChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
              >
                {industryList.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
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
