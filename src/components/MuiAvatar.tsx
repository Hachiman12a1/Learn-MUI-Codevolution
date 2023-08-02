import { Avatar, AvatarGroup, Stack } from "@mui/material";
import React from "react";

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row">
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
          <Avatar
            src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/03/05/10/istock-1137700343.jpg"
            alt="Jane Doe"
          />
          <Avatar
            src="https://m.media-amazon.com/images/M/MV5BZDljODI5Y2ItZjg3ZC00MWMzLTg3MzUtZDMyZWFkYzE3OWQ5XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
            alt="Tom"
          />
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Avatar
          variant="square"
          sx={{ bgcolor: "primary.light", width: 48, height: 48 }}
        >
          BW
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{ bgcolor: "success.light", width: 48, height: 48 }}
        >
          CK
        </Avatar>
      </Stack>
    </Stack>
  );
};

export default MuiAvatar;
