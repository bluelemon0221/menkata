import React from "react";
import { InputGroup } from "./components/InputGroup";
import { Calendar } from "./components/Calendar";

const page = () => {
  return (
    <div>
      <Calendar />
      <InputGroup />
    </div>
  );
};

export default page;
