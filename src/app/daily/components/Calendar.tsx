// FullCalendarを使用して日付がクリックされた際にDailyReportコンポーネントを呼び出すカレンダーコンポーネント
"use client";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import allLocales from "@fullcalendar/core/locales-all";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { DailyReport } from "./DailyReport";

// カレンダーコンポーネント
export const Calendar = () => {
  // DailyReportの表示状態を管理するstate
  const [showReport, setShowReport] = useState(false);

  // DailyReportが表示される日付を管理するstate
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // カレンダーコンポーネントのオプションを管理するstate
  const [calendarOptions, setCalendarOptions] = useState({
    plugins: [dayGridPlugin, interactionPlugin],
    locales: allLocales,
    locale: "ja",
    contentHeight: 800,
  });

  // 日付がクリックされた時の処理
  const handleDateClick = (arg: DateClickArg) => {
    // クリックされた日付を取得
    const clickedDate = arg.dateStr;

    // DailyReportコンポーネントを表示するためのstateを更新
    setSelectedDate(clickedDate);
    setShowReport(true);
  };

  // ダイアログが閉じられたときの処理
  const closeDialog = () => {
    setShowReport(false);
  };

  // FullCalendarコンポーネントをレンダリング
  return (
    <div>
      <FullCalendar {...calendarOptions} dateClick={handleDateClick} />
      {showReport && (
        <DailyReport date={selectedDate} closeDialog={closeDialog} />
      )}
    </div>
  );
};
