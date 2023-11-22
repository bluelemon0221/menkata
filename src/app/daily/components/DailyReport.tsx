// FullCalendarから日付がクリックされた時に表示するDailyReportコンポーネント
"use client";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { InputGroup } from "./InputGroup";
import { Close, HighlightOffOutlined } from "@mui/icons-material";

// DailyReportコンポーネント
export const DailyReport = ({
  date,
  closeDialog,
}: {
  date: string | null;
  closeDialog: () => void;
}) => {
  // ダイアログの表示状態を管理するstate
  const [open, setOpen] = useState(true);

  // ダイアログを開くボタンがクリックされた時の処理
  const handleClickOpen = () => {
    setOpen(true);
  };

  // ダイアログを閉じるボタンがクリックされた時の処理
  const handleClose = () => {
    setOpen(false);
    // closeDialog関数を呼び出し、親コンポーネントでの処理をトリガー
    closeDialog();
  };

  return (
    <React.Fragment>
      {/* 
        ダイアログを開くためのボタン (コメントアウトしているため非表示)
        <Button variant="outlined" onClick={handleClickOpen}>
          Open alert dialog
        </Button>
      */}
      {/* ダイアログコンポーネント */}
      <Dialog
        open={open} // ダイアログの表示状態
        onClose={handleClose} // ダイアログを閉じるアクション
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xl"
        fullWidth
      >
        {/* ダイアログのタイトル */}
        <DialogTitle
          id="alert-dialog-title"
          sx={{ justifyContent: "space-between", display: "flex" }}
        >
          {date}
          <IconButton aria-aria-label="close" onClick={handleClose}>
            <Close sx={{ fontSize: "30", color: "success" }} />
          </IconButton>
        </DialogTitle>
        {/* ダイアログのコンテンツ */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {/* ダイアログの詳細説明 (今回はサンプルテキスト) */}
            <InputGroup date={date!} />
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
    </React.Fragment>
  );
};
