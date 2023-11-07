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

export const InputTaskID = () => {
  const [inputValue, setInputValue] = useState<string | null>(null);
  const [job, setJob] = useState([]);

  useEffect(() => {
    fetch(`/api/job/${inputValue}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // データをコンソールに表示
        setJob(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [inputValue]);
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
      <div>
        {job.map((u: Job) => {
          return <p>{u.code}</p>;
        })}
      </div>
    </div>
  );
};
