"use client";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import { styled } from "@mui/system";

const FullScreenCalendar = styled(DateCalendar)({
  width: "100vw",
  height: "100vh",
  maxHeight: "100vh",
  minHeight: "100vh",
  overflow: "visible",
  fontSize: "10rem",
  ".MuiDayCalendar-slideTransition": {
    overflow: "visible",
  },
  ".MuiPickersDay-root": {
    fontSize: "5rem",
    height: "70px",
    width: "70px",
  },
});

export const Calendar = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FullScreenCalendar readOnly />
    </LocalizationProvider>
  );
};
