import { Box, FormControlLabel, Switch, FormGroup } from "@mui/material";
import { useState } from "react";
const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);

  const [switchItem, setSwitchItem] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = switchItem.indexOf(event.target.value);
    if (index === -1) setSwitchItem([...switchItem, event.target.value]);
    else
      setSwitchItem(switchItem.filter((skill) => skill !== event.target.value));
  };

  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            size="small"
            color="success"
          />
        }
      ></FormControlLabel>
      <FormGroup row>
        <FormControlLabel
          label="HTML"
          value="html"
          control={
            <Switch
              checked={switchItem.includes("html")}
              onChange={handleSkillChange}
            />
          }
        />
        <FormControlLabel
          label="CSS"
          value="css"
          control={
            <Switch
              checked={switchItem.includes("css")}
              onChange={handleSkillChange}
            />
          }
        />
        <FormControlLabel
          label="Javascript"
          value="javascript"
          control={
            <Switch
              checked={switchItem.includes("javascript")}
              onChange={handleSkillChange}
            />
          }
        />
      </FormGroup>
    </Box>
  );
};

export default MuiSwitch;
