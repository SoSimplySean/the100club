import { Typography, Box } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box sx={{ mt: "4rem" }}>
      <Typography variant="h2" component="h1" sx={{ fontWeight: "bold" }}>
        Your Cart.
      </Typography>
      <Typography variant="h6" sx={{ my: "1rem" }}>
        Get your swag checked out.
      </Typography>
    </Box>
  );
};

export default HeroBanner;
