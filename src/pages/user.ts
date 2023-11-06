import { query } from "@/lib/mysql";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const results = await query("SELECT * FROM user");
    res.status(200).json({ users: results });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
};
