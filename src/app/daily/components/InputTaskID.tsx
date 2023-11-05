"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export const InputTaskID = () => {
  const [inputValue, setInputValue] = useState<string | null>(null);

  return (
    <div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <TextField
        label="受託コード"
        margin="normal"
        inputProps={{ autoComplete: "off" }}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </div>
  );
};
