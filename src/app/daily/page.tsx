import React from "react";
import { InputGroup } from "./components/InputGroup";
import { Calendar } from "./components/Calendar";
import { DailyReport } from "./components/DailyReport";

const page = () => {
  return (
    <div>
      <Calendar />
      {/* <DailyReport /> */}
      {/* <InputGroup /> */}
    </div>
  );
};

export default page;
