import { Typography, Box } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box sx={{ mt: "7rem" }}>
      <Typography variant="h2" component="h1" sx={{ fontWeight: "bold" }}>
        Swag Store.
      </Typography>
      <Typography variant="h6" sx={{ my: "1rem" }}>
        We know you want to flex that you're a member of The 100 Club - do it
        subtly with premium merch.
      </Typography>
    </Box>
  );
};

export default HeroBanner;
