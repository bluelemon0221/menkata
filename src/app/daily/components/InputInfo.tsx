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
import React, { useEffect, useState } from "react";

// プログレスバーの見た目のカスタム
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
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

export const InputInfo = ({
  sumHour,
  date,
}: {
  sumHour: number;
  date: string;
}) => {
  const [nowDate, setNowDate] = useState<Date>(new Date());
  const [start, setStart] = useState<Date>(() => {
    const initialDate = new Date();
    initialDate.setHours(8, 30, 0); // 8時30分に設定
    return initialDate;
  });
  //   const [maxHour, setMaxHour] = useState<number>(8);
  const [progress, setProgress] = useState<number>(0);
  const selectedDate = new Date(date);

  // 始業時間からの差分計算
  const timeDifferenceInMilliseconds = nowDate.getTime() - start.getTime();
  const maxHour = Math.floor(timeDifferenceInMilliseconds / (1000 * 60));
  function formatTimeDifference(minutes: number) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    const formattedTime = `${hours}時間${remainingMinutes}分`;

    return formattedTime;
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      setNowDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId); // コンポーネントがアンマウントされたときにクリーンアップ
  }, []);
  useEffect(() => {
    if (sumHour < maxHour) {
      setProgress((sumHour / maxHour) * 100);
    } else {
      setProgress(100);
    }
  }, [sumHour]);
  return (
    <div>
      <p>現在時刻 : {nowDate.toLocaleTimeString()}</p>
      <p>{formatTimeDifference(maxHour)}</p>
      <p className="m-5 ml-10">{sumHour} 時間</p>
      <BorderLinearProgress
        variant="determinate"
        value={progress}
        sx={{ width: 500 }}
      />
    </div>
  );
};
