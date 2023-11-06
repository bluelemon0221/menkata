"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";

export const InputHour = () => {
  const [inputValue, setInputValue] = useState<string | null>(null);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);

    // 入力値が0.5で割り切れない場合、最も近い0.5の倍数に変換
    const roundedValue = Math.round(value * 2) / 2;
    e.target.value = roundedValue.toFixed(1);

    // 入力が整数かどうかを確認
    if (!isNaN(value) && value % 1 === 0) {
      // 整数の場合、小数点以下1桁を追加
      e.target.value = value.toFixed(1);
    }
    setInputValue(e.target.value);
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
