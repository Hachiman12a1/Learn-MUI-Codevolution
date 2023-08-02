import React, { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Favorite } from "@mui/icons-material";

const MuiTabs = () => {
  const [value, setValue] = useState("1");

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: string
  ) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: 300 }}>
          <TabList
            aria-label="Tabs example"
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Tab One" icon={<Favorite />} value="1" />
            <Tab label="Tab Two" value="2" />
            <Tab label="Tab Three" value="3" />
            <Tab label="Tab Four" icon={<Favorite />} value="4" />
            <Tab label="Tab Five" value="5" />
            <Tab
              label="Tab Six"
              value="6
            "
            />
          </TabList>
        </Box>
        <TabPanel value="1">Panel One</TabPanel>
        <TabPanel value="2">Panel Two</TabPanel>
        <TabPanel value="3">Panel Three</TabPanel>
        <TabPanel value="4">Panel Four</TabPanel>
        <TabPanel value="5">Panel Five</TabPanel>
        <TabPanel value="6">Panel Six</TabPanel>
      </TabContext>
    </Box>
  );
};

export default MuiTabs;
