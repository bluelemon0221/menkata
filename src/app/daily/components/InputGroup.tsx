"use client";
import { useEffect, useState } from "react";
import { InputRow } from "./InputRow";
import { DailyInputObject } from "../types";
import {
  Container,
  LinearProgress,
  linearProgressClasses,
  styled,
} from "@mui/material";

// プログレスバーの見た目のカスタム
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

// インプットグループのコンポーネント関数
export const InputGroup = () => {
  // ステートの定義
  const [sumHour, setSumHour] = useState<number>(0);
  const [maxHour, setMaxHour] = useState<number>(8);
  const [progress, setProgress] = useState<number>(0);

  // データの初期化
  const [inputObject, setInputObject] = useState<DailyInputObject>({
    userId: 1,
    date: "2023-01-01",
    data: Array.from({ length: 10 }, (_, index) => ({
      dateIndex: index,
      jobCode: null,
      detailsCode: null,
      hour: null,
      memo: null,
    })),
  });

  // データ変更時の処理
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

  // 行の追加処理
  const addInputRow = () => {
    setInputObject((prev) => {
      const newIndex = prev.data.length;
      return {
        userId: prev.userId,
        date: "2023-0201", // 適切な初期値に変更
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

  // データ変更時の処理とプログレスバーの更新
  useEffect(() => {
    const hours = inputObject.data.map((data) => data.hour ?? 0);
    const sum = hours.reduce((a, b) => a + b, 0);
    setSumHour(sum);
    if (sum < maxHour) {
      setProgress((sum / maxHour) * 100);
    } else {
      setProgress(100);
    }
  }, [inputObject]);

  // コンポーネントの描画
  return (
    <div>
      {/* デバッグ用途のため、本番環境では非表示にするか削除する */}
      <button onClick={() => console.log(inputObject)}>object</button>
      <Container maxWidth="xl">
        <p className="m-5 ml-10">{sumHour} 時間</p>
        <BorderLinearProgress
          variant="determinate"
          value={progress}
          sx={{ width: 500 }}
        />
        {inputObject.data.map((dataItem) => (
          <InputRow
            key={dataItem.dateIndex}
            data={dataItem}
            onDataChange={onDataChange}
          />
        ))}
      </Container>
      <button onClick={addInputRow}>Add InputRow</button>
    </div>
  );
};
