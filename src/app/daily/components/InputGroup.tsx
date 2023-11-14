"use client";
import { useState } from "react";
import { InputRow } from "./InputRow";
import { DailyInputObject } from "../types";

const InputGroup = () => {
  const [inputObject, setInputObject] = useState<DailyInputObject>({
    userId: 1,
    date: "2023-01-01",
    data: [
      {
        dateIndex: 0,
        jobCode: null,
        detailsCode: null,
        hour: null,
        memo: null,
      },
    ],
  });

  const onDataChange = (
    index: number,
    newData: Partial<(typeof inputObject.data)[0]>
  ) => {
    setInputObject((prev) => {
      const newDataArray = [...prev.data];
      newDataArray[index] = { ...newDataArray[index], ...newData };
      return { ...prev, data: newDataArray };
    });
  };

  const addInputRow = () => {
    setInputObject((prev) => {
      const newIndex = prev.data.length; // 現在のデータ数を取得して新しいインデックスを生成
      return {
        userId: prev.userId,
        date: "2023-0201", // これを適切な初期値に変更
        data: [
          ...prev.data,
          {
            dateIndex: newIndex,
            jobCode: null,
            detailsCode: null,
            hour: null,
            memo: null,
          },
        ],
      };
    });
  };

  // const updateData = ()
  return (
    <div>
      <button onClick={() => console.log(inputObject)}>object</button>
      {inputObject.data.map((dataItem) => (
        <InputRow
          key={dataItem.dateIndex}
          data={dataItem}
          onDataChange={onDataChange}
        />
      ))}
      <button onClick={addInputRow}>Add InputRow</button>
    </div>
  );
};

export default InputGroup;
