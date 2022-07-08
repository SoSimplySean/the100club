import React from "react";

import { Paper, Typography, Box, MenuItem, TextField } from "@mui/material";

const quantity = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
];

const CartItem = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        padding: "2rem",
        mt: "1rem",
        textAlign: "left",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          The One Shirt
        </Typography>
        <Typography variant="subtitle1">Size: Medium</Typography>
      </Box>
      <TextField
        id="outlined-select-currency"
        size="small"
        select
        hiddenLabel
        // value={currency}
        // onChange={handleChange}
      >
        {quantity.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Paper>
  );
};

export default CartItem;
