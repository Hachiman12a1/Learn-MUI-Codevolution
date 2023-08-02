import { Menu } from "@mui/icons-material";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";

const MuiDrawer = () => {
  const [isDrawOpen, setIsDrawOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawOpen(true)}
      >
        <Menu />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawOpen}
        onClose={() => setIsDrawOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;
