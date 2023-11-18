"use client";
import React from "react";
import { Box } from "@mui/material";
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
  // 入力項目の更新を共通化する関数
  const updateInput = (
    key: keyof typeof data,
    value: string | number | null
  ) => {
    onDataChange(data.dateIndex, { [key]: value });
  };

  return (
    <div>
      {/* 入力項目を横に配置するための Box コンポーネント */}
      <Box sx={{ display: "flex", gap: 2, marginY: 1 }}>
        {/* タスクIDの入力コンポーネント */}
        <InputTaskID
          updateJobCode={(newJobCode) => updateInput("jobCode", newJobCode)}
        />
        {/* 詳細コードの入力コンポーネント */}
        <InputDetails
          updateDetailsCode={(newDetailsCode) =>
            updateInput("detailsCode", newDetailsCode)
          }
        />
        {/* 時間の入力コンポーネント */}
        <InputHour updateHour={(newHour) => updateInput("hour", newHour)} />
        {/* メモの入力コンポーネント */}
        <InputMemo updateMemo={(newMemo) => updateInput("memo", newMemo)} />
        {/* ジョブの表示コンポーネント */}
        <DisplayJob jobcode={data.jobCode} />
      </Box>
    </div>
  );
};
