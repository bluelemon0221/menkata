"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import moji from "moji";

export const InputTaskID = () => {
  const [inputValue, setInputValue] = useState<string | null>(null);
  const handleInput = (e: React.FocusEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setInputValue(
      moji(input)
        .convert("ZE", "HE")
        .trim()
        .reject("HG")
        .toString()
        .toUpperCase()
    );
  };
  return (
    <div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <TextField
        label="受託コード"
        value={inputValue}
        margin="normal"
        inputProps={{
          autoComplete: "off",
        }}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onBlur={handleInput}
      />
    </div>
  );
};
