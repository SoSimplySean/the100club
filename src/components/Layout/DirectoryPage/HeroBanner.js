import { Typography, Box } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box sx={{ mt: "7rem" }}>
      <Typography variant="h2" component="h1" sx={{ fontWeight: "bold" }}>
        Member Directory.
      </Typography>
      <Typography variant="h6" sx={{ my: "1rem" }}>
        Connect and learn from other action-takers across our The 100 Club.
      </Typography>
    </Box>
  );
};

export default HeroBanner;
