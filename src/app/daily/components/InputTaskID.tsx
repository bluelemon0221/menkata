"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import moji from "moji";

type UpdateJobCode = {
  updateJobCode: (newJobCode: string | null) => void;
};

export const InputTaskID = ({ updateJobCode }: UpdateJobCode) => {
  // Stateの初期化
  const [jobcode, setJobcode] = useState<string | null>(null);

  // 入力フィールドのフォーカスが外れた時の処理
  const handleInput = (e: React.FocusEvent<HTMLInputElement>) => {
    // 入力値の取得と整形
    const input = e.target.value.trim();
    const newInput = input
      ? moji(input)
          .convert("ZE", "HE")
          .trim()
          .reject("HG")
          .toString()
          .toUpperCase()
      : null;

    // Stateの更新
    setJobcode(newInput);

    // 親コンポーネントに新しい受託コードを伝える
    updateJobCode(newInput);
  };

  return (
    <div>
      {/* 受託コード入力用のテキストフィールド */}
      <TextField
        label="受託コード"
        value={jobcode || ""}
        margin="normal"
        sx={{ width: 120 }}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          autoComplete: "off",
        }}
        // テキストフィールドの値が変更された時の処理
        onChange={(e) => setJobcode(e.target.value.trim())}
        // フォーカスが外れた時の処理
        onBlur={handleInput}
      />
    </div>
  );
};
