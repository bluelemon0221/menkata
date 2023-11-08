"use client";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import { InputTaskID } from "./InputTaskID";
import { InputDetails } from "./InputDetails";
import { InputHour } from "./InputHour";

export const InputRow = () => {
  const [jobCode, setJobCode] = useState<string | null>(null);
  return (
    <div>
      <Grid container>
        <Grid item xs={1.5}>
          <InputTaskID />
        </Grid>
        <Grid item xs={1.5}>
          <InputDetails />
        </Grid>
        <Grid item xs={1.5}>
          <InputHour />
        </Grid>
      </Grid>
    </div>
  );
};
