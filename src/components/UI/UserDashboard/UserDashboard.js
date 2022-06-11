import React from "react";

import {
  Grid,
  Paper,
  Typography,
  Avatar,
  TextField,
  MenuItem,
  Select,
  Chip,
  OutlinedInput,
  Box,
  useTheme,
} from "@mui/material";

// import { styled } from "@mui/material/styles";

// const StyledTextField = styled(TextField)(({ theme }) => ({
//   "& .MuiInputBase-input": {
//     backgroundColor: "#F0F0F0",
//   },
// }));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const UserDashboard = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Grid>
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
        sx={{ padding: "2rem", mt: "2rem", textAlign: "center" }}
      >
        <MenuItem key={1} divider="true" value={"Edit Profile"}>
          Edit Profile
        </MenuItem>
        <MenuItem key={2} value={"Log Out"}>
          Logout
        </MenuItem>
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
        />
        {/* AGE */}

        <Typography
          variant="subtitle2"
          component="h3"
          sx={{ fontWeight: "bold", mt: "1.5rem" }}
        >
          Age
        </Typography>
        <TextField hiddenLabel size="small" select fullWidth>
          <MenuItem key={1} value={"Euro"}>
            Euro
          </MenuItem>
        </TextField>
        {/* SKILLS */}
        <Typography
          variant="subtitle2"
          component="h3"
          sx={{ fontWeight: "bold", mt: "1.5rem" }}
        >
          Skills & Interests
        </Typography>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          fullWidth
          hiddenLabel
          size="small"
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        {/* NETWORKING OBJECTIVES */}
        <Typography
          variant="subtitle2"
          component="h3"
          sx={{ fontWeight: "bold", mt: "1.5rem" }}
        >
          Networking Objective
        </Typography>
        <TextField hiddenLabel size="small" select fullWidth >
          <MenuItem key={1} value={"Find a co-founder"}>
            Find a co-founder
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
        />
        {/* FOUNDING YEAR */}

        <Typography
          variant="subtitle2"
          component="h3"
          sx={{ fontWeight: "bold", mt: "1.5rem" }}
        >
          Founded In
        </Typography>
        <TextField hiddenLabel fullWidth size="small" variant="outlined" />
        {/* Industry */}
        <Typography
          variant="subtitle2"
          component="h3"
          sx={{ fontWeight: "bold", mt: "1.5rem" }}
        >
          Industry
        </Typography>
        <TextField hiddenLabel size="small" select fullWidth>
          <MenuItem key={1} value={"Euro"}>
            Euro
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
          Slack Username
        </Typography>
        <TextField hiddenLabel fullWidth size="small" variant="outlined" />
        <Typography
          variant="subtitle2"
          component="h3"
          sx={{ fontWeight: "bold", mt: "2rem" }}
        >
          Email
        </Typography>
        <TextField hiddenLabel fullWidth size="small" variant="outlined" />
        <Typography
          variant="subtitle2"
          component="h3"
          sx={{ fontWeight: "bold", mt: "2rem" }}
        >
          LinkedIn
        </Typography>
        <TextField hiddenLabel fullWidth size="small" variant="outlined" />
      </Paper>
    </Grid>
  );
};

export default UserDashboard;
