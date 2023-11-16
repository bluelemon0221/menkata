"use client";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import { InputTaskID } from "./InputTaskID";
import { InputDetails } from "./InputDetails";
import { InputHour } from "./InputHour";
import { DisplayJob } from "./DisplayJob";
import { DailyInputObject } from "../types";
import { InputMemo } from "./InputMemo";

type InputRowProps = {
  data: DailyInputObject["data"][0];
  onDataChange: (
    index: number,
    newData: Partial<DailyInputObject["data"][0]>
  ) => void;
};

export const InputRow = ({ data, onDataChange }: InputRowProps) => {
  const handleInputChange = (
    key: keyof typeof data,
    value: string | number | null
  ) => {
    onDataChange(data.dateIndex, { [key]: value });
  };

  return (
    <div>
      <Grid container>
        <Grid item xl={0.8}>
          <InputTaskID
            updateJobCode={(newJobCode) =>
              onDataChange(data.dateIndex, { jobCode: newJobCode })
            }
          />
        </Grid>
        <Grid item xl={1.3}>
          <InputDetails
            updateDetailsCode={(newDetailsCode) =>
              onDataChange(data.dateIndex, { detailsCode: newDetailsCode })
            }
          />
        </Grid>
        <Grid item xl={0.68}>
          <InputHour
            updateHour={(newHour) =>
              onDataChange(data.dateIndex, { hour: newHour })
            }
          />
        </Grid>
        <Grid item xl={2}>
          <InputMemo />
        </Grid>
        <Grid item xl={3}>
          <DisplayJob jobcode={data.jobCode} />
        </Grid>
      </Grid>
    </div>
  );
};
