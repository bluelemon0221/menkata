import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Job = {
  code: string;
  start: string | null;
  client_name: string | null;
  client_address: string | null;
  client_tell: string | null;
  owner: string | null;
  contractor: string | null;
  address1: string | null;
  address2: string | null;
  details1: string | null;
  details2: string | null;
  amount: number | null;
  Outsourcing: number | null;
  Billing_amount: number | null;
};

type JobCode = { jobcode: string | null };

export const DisplayJob = ({ jobcode }: JobCode) => {
  const [job, setJob] = useState<Job[] | null>(null);
  const [expanded, setExpanded] = React.useState<string | false>(false);
  useEffect(() => {
    if (!jobcode) {
      setJob(null);
      return;
    }
    fetch(`/api/job/${jobcode}`)
      .then((response) => response.json())
      .then((data) => {
        setJob(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [jobcode]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div>
      DisplayJob
      {job?.length ? (
        job.map((u: Job, index: number) => {
          return (
            <div key={index}>
              {/* <Accordion sx={{ height: 55, marginTop: 2 }}> */}
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                sx={{ height: 55, marginTop: 2 }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    {u.client_name}
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    {u.address1}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {u.client_address},{u.client_tell}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })
      ) : (
        <Accordion disabled sx={{ height: 55, marginTop: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>受託コードに一致する情報がありません</Typography>
          </AccordionSummary>
        </Accordion>
      )}
    </div>
  );
};
