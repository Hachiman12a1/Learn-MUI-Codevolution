import { Box, styled } from "@mui/material";
import React from "react";

const StyledBox = styled(Box)(({ theme }) => ({
  width: 250,
  height: 250,
  backgroundColor: theme.palette.neutral?.darker,
}));

const MuiResponsiveness = () => {
  return (
    <>
      <Box
        sx={{
          height: "300px",
          width: {
            xs: 100, //0
            sm: 200, //600
            md: 300, //900
            lg: 400, //1200
            xl: 500, //1536
          },
          bgcolor: "secondary.dark",
        }}
      ></Box>
      <StyledBox />
    </>
  );
};

export default MuiResponsiveness;
