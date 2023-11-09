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
  jobcode: string | null;
};

export const InputTaskID = ({ updateJobCode, jobcode }: UpdateJobCode) =>
  // jobcode: string | null
  {
    // const [inputValue, setInputValue] = useState<string | null>(null);
    // const [job, setJob] = useState([]);

    // useEffect(() => {
    //   if (!inputValue) {
    //     return;
    //   }
    //   fetch(`/api/job/${inputValue}`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data); // データをコンソールに表示
    //       setJob(data);
    //     })
    //     .catch((error) => {
    //       console.error("Fetch error:", error);
    //     });
    // }, [inputValue]);

    const handleInput = (e: React.FocusEvent<HTMLInputElement>) => {
      const input = e.target.value;
      updateJobCode(
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
        <div>{`inputValue: '${jobcode}'`}</div>
        <TextField
          label="受託コード"
          value={jobcode || ""}
          margin="normal"
          inputProps={{
            autoComplete: "off",
          }}
          onChange={(e) => {
            updateJobCode(e.target.value);
          }}
          onBlur={handleInput}
        />
        {/* <div>
          {job.map((u: Job) => {
            return (
              <div>
                <p>{u.code}</p>
                <p>{u.client_name}</p>
                <p>{u.address1}</p>
              </div>
            );
          })}
        </div> */}
      </div>
    );
  };
