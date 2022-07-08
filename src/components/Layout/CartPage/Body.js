import React from "react";

import CartItem from "../../UI/CartItem/CartItem";

import { Paper, Box, Typography, Button } from "@mui/material";

const Body = () => {
  return (
    <Box>
      <Box sx={{ mt: "3rem" }}>
        <CartItem />
      </Box>
      <Paper
        elevation={4}
        sx={{ padding: "2rem", mt: "3rem", textAlign: "left" }}
      >
        <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }}>
          Checkout
        </Typography>
        <Typography variant="body1" sx={{ mt: "1rem" }}>
          Your credits: 10
        </Typography>
        <Typography variant="body1">Cart cost: 5</Typography>
        <Typography variant="body1">Remaining credits: 5</Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "primary", mt: "2rem" }}
        >
          BUY NOW
        </Button>
      </Paper>
    </Box>
  );
};

export default Body;
