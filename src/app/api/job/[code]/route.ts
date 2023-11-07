import { query } from "@/lib/mysql";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(
  req: NextApiRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const results = await query(
      `SELECT * FROM jobs where code = "${params.slug}"`
    );
    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    return NextResponse.json(error);
  }
}
