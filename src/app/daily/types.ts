export type DailyInputObject = {
  userId: number;
  date: string;
  data: Array<{
    dateIndex: number;
    jobCode: string | null;
    detailsCode: string | null;
    hour: number | null;
    memo: string | null;
  }>;
};
