import { Box } from "@mui/material";
import { DateRangePicker } from "@mui/x-date-pickers-pro";
import { DateRange } from "@mui/x-date-pickers-pro/internals/models";

import { useState } from "react";

const MuiDateRangePicker = () => {
  const [value, setValue] = useState<DateRange<Date>>([null, null]);

  return (
    <Box>
      <DateRangePicker
        value={value}
        localeText={{ start: "Check-in", end: "Check-out" }}
        onChange={(newValue) => setValue(newValue)}
      />
    </Box>
  );
};

export default MuiDateRangePicker;
