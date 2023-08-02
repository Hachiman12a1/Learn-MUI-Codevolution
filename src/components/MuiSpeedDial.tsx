import { CopyAllOutlined, Edit, Print, Share } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";

const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<Edit />} />}
    >
      <SpeedDialAction
        icon={<CopyAllOutlined />}
        tooltipOpen
        tooltipTitle="Copy"
      />
      <SpeedDialAction icon={<Print />} tooltipOpen tooltipTitle="Print" />
      <SpeedDialAction icon={<Share />} tooltipOpen tooltipTitle="Share" />
    </SpeedDial>
  );
};

export default MuiSpeedDial;
