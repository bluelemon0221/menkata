"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export const InputHour = () => {
  const [inputValue, setInputValue] = useState<string | null>(null);

  const handleBlur = (e) => {
    const value = e.target.value;
    // 入力が整数かどうかを確認
    if (!isNaN(value) && value % 1 === 0) {
      // 整数の場合、小数点以下1桁を追加
      e.target.value = parseFloat(value).toFixed(1);
    }
  };

  return (
    <div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <TextField
        label="作業時間"
        margin="normal"
        sx={{ width: 100 }}
        inputProps={{
          type: "number",
          step: "0.5",
          min: "0",
          autoComplete: "off",
        }}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onBlur={handleBlur}
      />
    </div>
  );
};
