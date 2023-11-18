"use client";
import { TextField } from "@mui/material";
import React, { useState } from "react";

type InputMemoProps = {
  updateMemo: (newMemo: string | null) => void;
};
export const InputMemo = ({ updateMemo }: InputMemoProps) => {
  const [memo, setMemo] = useState<string | null>(null);
  return (
    <div>
      <TextField
        label="備考"
        margin="normal"
        sx={{ width: 300 }}
        value={memo || ""}
        onChange={(e) => {
          if (e.target.value) {
            setMemo(e.target.value);
          } else {
            setMemo(null);
          }
        }}
        onBlur={() => {
          updateMemo(memo);
        }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
};
