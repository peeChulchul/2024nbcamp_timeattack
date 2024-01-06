import { NextRequest, NextResponse } from "next/server";
const SURVER_URL = "https://moneyfulpublicpolicy.co.kr";

export async function POST(req: NextRequest) {
  const body = await req.json();

  console.log(body);
  try {
    const response = await (await fetch(SURVER_URL, { method: "POST", body })).json();
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error);
  }
}
