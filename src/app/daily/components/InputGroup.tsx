"use client";
import { useEffect, useState } from "react";
import { InputRow } from "./InputRow";
import { DailyInputObject } from "../types";
import {
  Button,
  Container,
  LinearProgress,
  linearProgressClasses,
  styled,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { Box } from "@mui/system";
import { InputInfo } from "./InputInfo";

// インプットグループのコンポーネント関数
export const InputGroup = ({
  date,
  closeDialog,
}: {
  date: string | null;
  closeDialog: () => void;
}) => {
  // ダイアログの表示状態を管理するstate
  const [open, setOpen] = useState(true);
  // ステートの定義
  const [sumHour, setSumHour] = useState<number>(0);
  const [maxHour, setMaxHour] = useState<number>(8);
  const [progress, setProgress] = useState<number>(0);

  // データの初期化
  const [inputObject, setInputObject] = useState<DailyInputObject>({
    userId: 1,
    date: date!,
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
        date: date!, // 適切な初期値に変更
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
  // ダイアログを閉じるボタンがクリックされた時の処理
  const handleClose = () => {
    setOpen(false);
    // closeDialog関数を呼び出し、親コンポーネントでの処理をトリガー
    closeDialog();
  };

  // データ変更時の処理とプログレスバーの更新
  useEffect(() => {
    const hours = inputObject.data.map((data) => data.hour ?? 0);
    const sum = hours.reduce((a, b) => a + b, 0);
    setSumHour(sum);
  }, [inputObject]);

  // コンポーネントの描画
  return (
    <div>
      {/* デバッグ用途のため、本番環境では非表示にするか削除する */}
      <button onClick={() => console.log(inputObject)}>object</button>
      <Dialog
        open={open} // ダイアログの表示状態
        onClose={handleClose} // ダイアログを閉じるアクション
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xl"
        fullWidth
      >
        {/* ダイアログのタイトル */}
        <DialogTitle id="alert-dialog-title">
          <Box sx={{ justifyContent: "space-between", display: "flex" }}>
            <Container sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Typography variant="h4">{date}</Typography>

              <Typography variant="h4">テストユーザー</Typography>
            </Container>
            <IconButton aria-aria-label="close" onClick={handleClose}>
              <Close sx={{ fontSize: "30", color: "success" }} />
            </IconButton>
          </Box>
          <InputInfo sumHour={sumHour} date={date!} />
        </DialogTitle>
        {/* ダイアログのコンテンツ */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {/* ダイアログの詳細説明 (今回はサンプルテキスト) */}
            <Container maxWidth="xl">
              {inputObject.data.map((dataItem) => (
                <InputRow
                  key={dataItem.dateIndex}
                  data={dataItem}
                  onDataChange={onDataChange}
                />
              ))}
            </Container>
            <Container sx={{ textAlign: "center" }}>
              <Button onClick={addInputRow} variant="outlined">
                行を追加する
              </Button>
            </Container>
          </DialogContentText>
        </DialogContent>
        {/* ダイアログのアクション (ボタン) */}
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} variant="contained" disableElevation>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
