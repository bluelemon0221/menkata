"use client";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import { styled } from "@mui/system";
import { Dayjs } from "dayjs";

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
    fontSize: "7rem",
    height: "120px",
    width: "160px",
  },
  ".MuiDayCalendar-weekDayLabel": {
    fontSize: "7rem",
    height: "120px",
    width: "160px",
  },
});

const japaneseDayFormatter = (day: string, date: Dayjs) => {
  const japaneseWeekdays = ["日", "月", "火", "水", "木", "金", "土"];
  const dayIndex = date.day();

  return japaneseWeekdays[dayIndex];
};

export const Calendar = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FullScreenCalendar dayOfWeekFormatter={japaneseDayFormatter as any} />
    </LocalizationProvider>
  );
};
