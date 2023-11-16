"use client";
import { TextField } from "@mui/material";
import React, { useState } from "react";

export const InputMemo = () => {
  const [memo, setMemo] = useState<string | null>(null);
  return (
    <div>
      <div>{`${memo}`}</div>
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
      />
    </div>
  );
};
