import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useSWR from "swr";

// Job型の定義
type Job = {
  start: string | null;
  client_name: string | null;
  address1: string | null;
  owner: string | null;
  details1: string | null;
  details2: string | null;
  contractor: string | null;
  address2: string | null;
};

// JobCode型の定義
type JobCode = { jobcode: string | null };

const fetcher = (url: string) => fetch(url).then((res) => res.json());

// DisplayJobコンポーネント
export const DisplayJob = ({ jobcode }: JobCode) => {
  // SWRのhookを使用してデータをフェッチ
  const { data: job, error } = useSWR<Job[]>(
    jobcode ? `/api/job/${jobcode}` : null,
    fetcher
  );

  const [expanded, setExpanded] = React.useState<string | false>(false);

  // Accordionが展開・折り畳みられたときのハンドラ関数
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <div className="mt-5">
        {job?.length ? (
          job.map((u: Job, index: number) => {
            // 作業開始日のフォーマット変換
            const startDate = u.start
              ? new Date(u.start).toLocaleDateString()
              : "";
            return (
              <div key={index}>
                {/* アコーディオンコンポーネント */}
                <Accordion
                  expanded={expanded === "panel"}
                  onChange={handleChange("panel")}
                  sx={{ width: 600 }}
                >
                  {/* アコーディオンのヘッダ */}
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{u.client_name}</Typography>
                    <Typography sx={{ color: "text.secondary", marginX: 2 }}>
                      {u.address1}
                    </Typography>
                  </AccordionSummary>
                  {/* アコーディオンのコンテンツ */}
                  <AccordionDetails>
                    <Typography>受付日　　　:　{startDate}</Typography>
                    <Typography>依頼者　　　:　{u.owner}</Typography>
                    <Typography>依頼内容１　:　{u.details1}</Typography>
                    <Typography>依頼内容２　:　{u.details2}</Typography>
                    <Typography>担当者　　　:　{u.contractor}</Typography>
                    <Typography>所在１　　　:　{u.address1}</Typography>
                    <Typography>所在２　　　:　{u.address2}</Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            );
          })
        ) : (
          // データがない場合の表示
          <Accordion disabled sx={{ width: 600 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>----</Typography>
            </AccordionSummary>
          </Accordion>
        )}
      </div>
    </div>
  );
};
