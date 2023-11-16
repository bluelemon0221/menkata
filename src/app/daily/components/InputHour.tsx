"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";

type InputHourProps = {
  updateHour: (newHour: number | null) => void;
};

export const InputHour = ({ updateHour }: InputHourProps) => {
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

    if (e.target.value) {
      setInputValue(e.target.value);
      updateHour(value);
    } else {
      setInputValue(null);
    }
  };

  return (
    <div>
      <div>{`${inputValue}`}</div>
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
          if (e.target.value) {
            setInputValue(e.target.value);
          } else {
            setInputValue(null);
          }
        }}
        onBlur={handleBlur}
      />
    </div>
  );
};
