import { Stack } from "@mui/material";
import { DatePicker, DateTimePicker, TimePicker } from "@mui/x-date-pickers";
import { useState } from "react";

const MuiPicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);

  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="Date Picker"
        slotProps={{ textField: { variant: "outlined" } }}
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
      />
      <TimePicker
        label="Time Picker"
        slotProps={{ textField: { variant: "outlined" } }}
        value={selectedTime}
        onChange={(newValue) => setSelectedTime(newValue)}
      />
      <DateTimePicker
        label="Date Picker"
        slotProps={{ textField: { variant: "outlined" } }}
        value={selectedDateTime}
        onChange={(newValue) => setSelectedDateTime(newValue)}
      />
    </Stack>
  );
};

export default MuiPicker;
