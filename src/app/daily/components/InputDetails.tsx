"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

// 細目入力テキストボックスの定義
export const InputDetails = () => {
  const [inputValue, setInputValue] = useState<string | null>(null);
  const details = ["105 逆打ち", "114 製図・作図", "999 その他"];

  // 途中までの入力でも選択肢が一つに絞れればそれを選択するようにする関数
  const valueInterpolation = () => {
    if (inputValue) {
      const result: string | undefined = details.find((value) =>
        value.includes(inputValue)
      );
      if (result) {
        setInputValue(result);
      } else {
        setInputValue(null);
      }
    }
  };
  return (
    <div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <Autocomplete
        value={inputValue !== null ? inputValue : null}
        isOptionEqualToValue={(option, value) => option === value}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={details}
        sx={{ width: 200 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="細目コード"
            onBlur={valueInterpolation}
            margin="normal"
          />
        )}
      />
    </div>
  );
};
