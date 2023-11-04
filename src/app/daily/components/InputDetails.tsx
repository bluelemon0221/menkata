"use client";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";

type Details = {
  label: string;
};

export const InputDetails = () => {
  const [inputValue, setInputValue] = useState<Details | null>(null);
  const details = [{ label: "105 逆打ち" }, { label: "114 製図・作図" }];

  const valueInterpolation = () => {
    const result = details.filter((value) => {
      return value.label.includes(inputValue);
    });
    if (result.length === 1) {
      console.log(result);
      setInputValue(result[0].label);
      details.find((value) => value.label === result[0].label);
    } else {
      setInputValue(null);
    }
  };

  return (
    <div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />
      <Autocomplete
        onFocus={() => setInputValue(null)}
        value={inputValue !== null ? `${inputValue}` : ""}
        // inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={details}
        sx={{ width: 200 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="細目コード"
            onBlur={valueInterpolation}
          />
        )}
      />
    </div>
  );
};
