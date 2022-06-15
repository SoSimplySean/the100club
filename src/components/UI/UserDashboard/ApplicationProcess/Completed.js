import React from "react";

import { Typography, Box, Button } from "@mui/material";

const Completed = (props) => {
  return (
    <React.Fragment>
      <Typography sx={{ my: "4rem", mb: 1, textAlign: "center" }}>
        You are a member of The 100 Club!
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button onClick={props.handleReset}>Reset</Button>
      </Box>
    </React.Fragment>
  );
};

export default Completed;
