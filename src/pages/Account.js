import React from "react";

import {
  Grid,
  Paper,
  Typography,
  Avatar,
  MenuItem,
  TextField,
  Button,
  Box,
} from "@mui/material";

import { useState, useEffect } from 'react'
import { supabase } from '../api'



// ******************************************************************************************************************************

const SAccount = ({ session }) => {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [email, setEmail] = useState(null)

  const [about, setAbout] = useState(null)
  const [age, setAge] = useState(null)
  const [skills, setSkills] = useState(null)
  const [networking, setNetworking] = useState(null)

  const [company, setCompany] = useState(null)
  const [founded, setFounded] = useState(null)
  const [industry, setIndustry] = useState(null)

  useEffect(() => {
    getProfile()
  }, [session])

  const getProfile = async () => {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, email, about, age, skills, networking, company, founded, industry`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setEmail(data.email)
        setAbout(data.about)
        setAge(data.age)
        setSkills(data.skills)
        setNetworking(data.networking)
        setCompany(data.company)
        setFounded(data.founded)
        setIndustry(data.industry)
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  const updateProfile = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const user = supabase.auth.user()

      const updates = {
        id: user.id,
        username,
        website,
        email,
        about,
        age,
        skills,
        networking,
        company,
        founded,
        industry,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
      })

      if (error) {
        throw error
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div aria-live="polite">
      {loading ? (
        'Saving ...'
      ) : (
        <Grid>
          <Box component="form" onSubmit={updateProfile} noValidate sx={{ mt: 1 }}>
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
            </Paper>
            <Paper
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
            </Paper>
            <Paper
              elevation={4}
              sx={{ padding: "2rem", mt: "2rem", textAlign: "left" }}
            >
              {/* NAME */}
              <Typography
                variant="subtitle2"
                component="h3"
                sx={{ fontWeight: "bold" }}
              >
                Name
              </Typography>
              <TextField
                hiddenLabel
                multiline
                rows={1}
                fullWidth
                size="small"
                variant="outlined"
                id="username"
                type="text"
                value={username || ''}
                onChange={(e) => setUsername(e.target.value)}
              />

              {/* WEBSITE */}
              <Typography
                variant="subtitle2"
                component="h3"
                sx={{ fontWeight: "bold", mt: "1.5rem" }}
              >
                Website
              </Typography>
              <TextField
                hiddenLabel
                multiline
                rows={1}
                fullWidth
                size="small"
                variant="outlined"
                id="website"
                type="url"
                value={website || ''}
                onChange={(e) => setWebsite(e.target.value)}
                sx ={{ mb: "1.5rem" }}
              />

              {/* EMAIL */}
              <Typography
                variant="subtitle2"
                component="h3"
                sx={{ fontWeight: "bold" }}
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
                value={email || ''}
                onChange={(e) => setEmail(e.target.value)}
                sx ={{ mb: "1.5rem" }}
              />
            </Paper>
            <Paper              
              elevation={4}
              sx={{ padding: "2rem", mt: "2rem", textAlign: "left" }}
            >
              {/* ABOUT YOU */}
              <Typography
                variant="subtitle2"
                component="h3"
                sx={{ fontWeight: "bold" }}
              >
                About You
              </Typography>
              <TextField
                hiddenLabel
                multiline
                rows={4}
                fullWidth
                size="small"
                variant="outlined"
                id="about"
                type="url"
                value={about || ''}
                onChange={(e) => setAbout(e.target.value)}
                sx ={{ mb: "1.5rem" }}
              />

              {/* AGE */}
              <Typography
                variant="subtitle2"
                component="h3"
                sx={{ fontWeight: "bold" }}
              >
                Age
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
                value={age || ''}
                onChange={(e) => setAge(e.target.value)}
                sx ={{ mb: "1.5rem" }}
              />

              {/* SKILLS & INTERESTS */}
              <Typography
                variant="subtitle2"
                component="h3"
                sx={{ fontWeight: "bold" }}
              >
                Skills & Interests
              </Typography>
              <TextField hiddenLabel size="small" select fullWidth onChange={(e) => setSkills(e.target.value)}>
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
                Networking Objective
              </Typography>
              <TextField hiddenLabel size="small" select fullWidth onChange={(e) => setNetworking(e.target.value)}>
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
              {/* ABOUT YOUR COMPANY */}
              <Typography
                variant="subtitle2"
                component="h3"
                sx={{ fontWeight: "bold" }}
              >
                About Your Company
              </Typography>
              <TextField
                hiddenLabel
                multiline
                rows={4}
                fullWidth
                size="small"
                variant="outlined"
                id="company"
                type="url"
                value={company || ''}
                onChange={(e) => setCompany(e.target.value)}
                sx ={{ mb: "1.5rem" }}
              />

              {/* FOUNDED IN */}
              <Typography
                variant="subtitle2"
                component="h3"
                sx={{ fontWeight: "bold" }}
              >
                Founded In
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
                value={founded || ''}
                onChange={(e) => setFounded(e.target.value)}
                sx ={{ mb: "1.5rem" }}
              />

              {/* INDUSTRY */}
              <Typography
                variant="subtitle2"
                component="h3"
                sx={{ fontWeight: "bold" }}
              >
                Industry
              </Typography>
              <TextField hiddenLabel size="small" select fullWidth onChange={(e) => setIndustry(e.target.value)}>
                <MenuItem key={1} value={"Ecommerce"}>
                  Ecommerce
                </MenuItem>
                <MenuItem key={1} value={"Healthcare Tech"}>
                  Healthcare Tech
                </MenuItem>
              </TextField>          
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
  )
}

export default SAccount