"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

type InputDetailsProps = {
  updateDetailsCode: (newDetailsCode: string | null) => void;
};

// 細目入力テキストボックスの定義
export const InputDetails = ({ updateDetailsCode }: InputDetailsProps) => {
  // Stateの初期化
  const [inputValue, setInputValue] = useState<string | null>(null);

  // 細目の選択肢
  const details = ["105 逆打ち", "114 製図・作図", "999 その他"];

  // 途中までの入力でも選択肢が一つに絞れればそれを選択するようにする関数
  const valueInterpolation = () => {
    if (inputValue) {
      const result: string | undefined = details.find((value) =>
        value.includes(inputValue)
      );
      if (result) {
        setInputValue(result);
        updateDetailsCode(result);
      } else {
        setInputValue(null);
      }
    }
  };

  return (
    <div>
      {/* Autocompleteコンポーネント */}
      <Autocomplete
        value={inputValue !== null ? inputValue : null}
        isOptionEqualToValue={(option, value) => option === value}
        // 入力値が変更された時の処理
        onInputChange={(e, newInputValue) => {
          if (newInputValue) {
            setInputValue(newInputValue);
          } else {
            setInputValue(null);
          }
        }}
        // 選択肢の定義
        options={details}
        sx={{ width: 200 }}
        // 入力フィールドの設定
        renderInput={(params) => (
          <TextField
            {...params}
            label="細目コード"
            onBlur={valueInterpolation}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        )}
      />
    </div>
  );
};
