import { query } from "@/lib/mysql";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(
  req: NextApiRequest,
  { params }: { params: { code: string } }
) {
  try {
    const { code } = params;

    if (!code) {
      return;
    }
    const results = await query(`SELECT * FROM jobs where code = "${code}"`);
    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    return NextResponse.json(error);
  }
}
