import { Face } from "@mui/icons-material";
import { Avatar, Chip, Stack } from "@mui/material";
import { useState } from "react";

const MuiChip = () => {
  const [chips, setChips] = useState(["Chip1", "Chip2", "Chip3", "Chip4"]);

  const handleDelete = (chipDelete: string) => {
    setChips(chips.filter((chip) => chip !== chipDelete));
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip" color="primary" size="small" icon={<Face />} />
      <Chip
        label="Chip outlined"
        size="small"
        color="secondary"
        variant="outlined"
        icon={<Avatar sx={{ width: 24, height: 24 }}>V</Avatar>}
      />
      <Chip label="Click" color="success" onClick={() => alert("Clicked!")} />
      <Chip
        label="Delete"
        color="error"
        size="small"
        onClick={() => alert("Clicked!")}
        onDelete={() => alert("Delete Handler Called")}
      />
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};

export default MuiChip;
