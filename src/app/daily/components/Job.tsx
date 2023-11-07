"use client";
import { useState, useEffect } from "react";

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

function Job() {
  const [job, setJob] = useState([]);

  useEffect(() => {
    fetch("/api/job")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data); // データをコンソールに表示
        setJob(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);
  return (
    <div>
      {job.map((u: Job) => {
        return <p>{u.code}</p>;
      })}
    </div>
  );
}

export default Job;
