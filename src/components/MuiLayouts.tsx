import { Box } from "@mui/material";
import React from "react";

const MuiLayouts = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        Code Evolution
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2}
      >
        Code Evolution
      </Box>
    </>
  );
};

export default MuiLayouts;
