"use client";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import { InputTaskID } from "./InputTaskID";
import { InputDetails } from "./InputDetails";
import { InputHour } from "./InputHour";
import { DisplayJob } from "./DisplayJob";
import { DailyInputObject } from "../types";

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
  const [jobcode, setJobCode] = useState<string | null>(null);
  const [detailcode, setDetailCode] = useState<string | null>(null);
  const [hour, setHour] = useState<string | null>(null);

  // const updateJobCode = (newJobCode: string | null) => {
  //   setJobCode(newJobCode);
  // };
  // const updateDetailCode = (newDetailcode: string | null) => {
  //   setDetailCode(newDetailcode);
  // };
  // const updateHour = (newHour: string | null) => {
  //   setHour(newHour);
  // };

  return (
    <div>
      <Grid container>
        <Grid item xl={1.5}>
          <InputTaskID
            updateJobCode={(newJobCode) =>
              onDataChange(data.dateIndex, { jobCode: newJobCode })
            }
            // jobcode={data.jobCode}
          />
        </Grid>
        <Grid item xl={1.5}>
          <InputDetails
            updateDetailsCode={(newDetailsCode) =>
              onDataChange(data.dateIndex, { detailsCode: newDetailsCode })
            }
          />
        </Grid>
        <Grid item xl={1.5}>
          <InputHour
            updateHour={(newHour) =>
              onDataChange(data.dateIndex, { hour: newHour })
            }
          />
        </Grid>
        <Grid item xl={3}>
          <DisplayJob jobcode={jobcode} />
        </Grid>
      </Grid>
    </div>
  );
};
