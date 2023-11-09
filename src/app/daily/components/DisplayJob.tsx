import React, { useEffect, useState } from "react";

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
  const [job, setJob] = useState([]);
  console.log(jobcode);
  useEffect(() => {
    if (!jobcode) {
      return;
    }
    console.log(jobcode);
    fetch(`/api/job/${jobcode}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // データをコンソールに表示
        setJob(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [jobcode]);
  return (
    <div>
      DisplayJob
      <br />
      {job.map((u: Job) => {
        return (
          <div>
            <p>{u.client_name}</p>
            <p>{u.address1}</p>
          </div>
        );
      })}
    </div>
  );
};
