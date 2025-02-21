import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";

export default function LocalizationProviderDecorator(Story) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Story />
    </LocalizationProvider>
  );
}
