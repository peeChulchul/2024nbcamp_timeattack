import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
const SURVER_URL = "https://moneyfulpublicpolicy.co.kr";

export async function GET(req: NextRequest, context: { params: { accessToken: string } }) {
  const body = await req.json();
  const {
    params: { accessToken }
  } = context;

  try {
    const response = await axios.get(`${SURVER_URL}/user`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    console.log("결과", response.data);
    return NextResponse.json(response.data);
  } catch (error: any) {
    return new Response(
      JSON.stringify({ message: error.response.data || "잘못된 요청입니다.", status: error.response.status || 500 }),
      {}
    );
  }
}
