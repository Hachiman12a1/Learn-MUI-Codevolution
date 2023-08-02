import React from "react";
import { Avatar, Box, Skeleton, Stack, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Save } from "@mui/icons-material";

const MuiLoadingButton = () => {
  return (
    <Stack spacing={2} direction="row">
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
      <LoadingButton variant="outlined">Fetch data</LoadingButton>
      <LoadingButton loading variant="outlined" loadingIndicator="Loading...">
        Fetch data
      </LoadingButton>
      <LoadingButton
        loadingPosition="start"
        variant="outlined"
        startIcon={<Save />}
      >
        Save
      </LoadingButton>
      <LoadingButton
        loading
        loadingPosition="start"
        variant="outlined"
        startIcon={<Save />}
      >
        Save
      </LoadingButton>
    </Stack>
  );
};

export default MuiLoadingButton;
