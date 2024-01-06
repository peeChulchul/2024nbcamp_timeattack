import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { error } from "console";
const SURVER_URL = "https://moneyfulpublicpolicy.co.kr";

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const response = await axios.post(`${SURVER_URL}/register`, body);
    console.log("결과", response.data);
    return NextResponse.json(response.data);
  } catch (error: any) {
    // return NextResponse.json(error.response.data);
    return new Response(JSON.stringify({ message: error.response.data || "잘못된 요청입니다." }), {
      status: error.response.status || 500
    });
  }
}
