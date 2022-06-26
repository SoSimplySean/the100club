import React from "react";

import { Box } from "@mui/material";

const SwagImage = (props) => {
  return (
    <Box>
      <img src={props.img} alt="productImage" />
    </Box>
  );
};

export default SwagImage;
