import React from "react";

import {
  Grid,
  Paper,
  Typography,
  Avatar,
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
  const [avatar_url, setAvatarUrl] = useState(null)

  useEffect(() => {
    getProfile()
  }, [session])

  const getProfile = async () => {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
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
        avatar_url,
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
                rows={4}
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
                rows={4}
                fullWidth
                size="small"
                variant="outlined"
                id="website"
                type="url"
                value={website || ''}
                onChange={(e) => setWebsite(e.target.value)}
                sx ={{ mb: "1.5rem" }}
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
  )
}

export default SAccount