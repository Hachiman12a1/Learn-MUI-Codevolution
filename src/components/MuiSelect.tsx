import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState, useCallback } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState<string[]>([]);

  const handleChangeCountry = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = event.target.value;

    setCountry(value);
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  const handleCheckError = useCallback(() => {
    if (country?.length === 0 || !country) return true;
    return false;
  }, [country]);

  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={countries}
        onChange={(e) => handleChangeCountry(e)}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        error={handleCheckError()}
        helperText={!country ? "Required" : "Please select the country!"}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
