"use client";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import { InputTaskID } from "./InputTaskID";
import { InputDetails } from "./InputDetails";
import { InputHour } from "./InputHour";
import { DisplayJob } from "./displayJob";

export const InputRow = () => {
  const [jobcode, setJobCode] = useState<string | null>(null);
  const [detailcode, setDetailCode] = useState<string | null>(null);
  const [hour, setHour] = useState<string | null>(null);

  const updateJobCode = (newJobCode: string | null) => {
    setJobCode(newJobCode);
  };
  const updateDetailCode = (newDetailcode: string | null) => {
    setDetailCode(newDetailcode);
  };
  const updateHour = (newHour: string | null) => {
    setHour(newHour);
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={1.5}>
          <InputTaskID updateJobCode={updateJobCode} jobcode={jobcode} />
        </Grid>
        <Grid item xs={1.5}>
          <InputDetails />
        </Grid>
        <Grid item xs={1.5}>
          <InputHour />
        </Grid>
        <Grid item xs={3}>
          <DisplayJob jobcode={jobcode} />
        </Grid>
      </Grid>
    </div>
  );
};
