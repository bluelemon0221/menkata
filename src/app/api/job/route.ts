import { query } from "@/lib/mysql";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const results = await query("SELECT * FROM jobs");
    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    return NextResponse.json(error);
  }
}
