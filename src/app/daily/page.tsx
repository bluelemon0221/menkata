import React from "react";
import { InputDetails } from "./components/InputDetails";
import { InputTaskID } from "./components/InputTaskID";
import { Grid } from "@mui/material";
import { InputHour } from "./components/InputHour";
import User from "./components/User";
import Job from "./components/Job";

const page = () => {
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
      {/* <User /> */}
      <Job />
    </div>
  );
};

export default page;
