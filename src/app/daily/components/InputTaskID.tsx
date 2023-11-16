"use client";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import moji from "moji";
type Job = {
  code: string;
  start: string | null;
  client_name: string | null;
  client_address: string | null;
  client_tell: string | null;
  owner: string | null;
  contractor: string | null;
  address1: string | null;
  address2: string | null;
  details1: string | null;
  details2: string | null;
  amount: number | null;
  Outsourcing: number | null;
  Billing_amount: number | null;
};

type UpdateJobCode = {
  updateJobCode: (newJobCode: string | null) => void;
};

export const InputTaskID = ({ updateJobCode }: UpdateJobCode) => {
  const [jobcode, setJobcode] = useState<string | null>(null);
  const handleInput = (e: React.FocusEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (input) {
      const newInput = moji(input)
        .convert("ZE", "HE")
        .trim()
        .reject("HG")
        .toString()
        .toUpperCase();
      setJobcode(newInput);
      updateJobCode(newInput);
    } else {
      setJobcode(null);
      return;
    }
  };
  return (
    <div>
      <div>{`${jobcode}`}</div>
      <TextField
        label="受託コード"
        value={jobcode || ""}
        margin="normal"
        sx={{ width: 120 }}
        inputProps={{
          autoComplete: "off",
        }}
        onChange={(e) => {
          if (e.target.value) {
            setJobcode(e.target.value);
          } else {
            setJobcode(null);
          }
        }}
        onBlur={handleInput}
      />
    </div>
  );
};
