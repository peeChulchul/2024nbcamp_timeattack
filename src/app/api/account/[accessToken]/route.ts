import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
const SURVER_URL = "https://moneyfulpublicpolicy.co.kr";

export async function GET(req: NextRequest, context: { params: { accessToken: string } }) {
  const {
    params: { accessToken }
  } = context;

  console.log("유저 얻어오자");
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
      JSON.stringify({
        message: error.response.data.message || "잘못된 요청입니다."
      }),
      { status: error.response.status || 500 }
    );
  }
}

export async function PATCH(req: NextRequest, context: { params: { accessToken: string } }) {
  const {
    params: { accessToken }
  } = context;

  const formData = await req.formData();

  try {
    const response = await axios.get(`${SURVER_URL}/profile`, {
      data: formData,
      headers: {
        ContentType: "multipart/form-data",
        Authorization: `Bearer ${accessToken}`
      }
    });
    console.log("결과", response.data);
    return NextResponse.json(response.data);
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        message: error.response.data.message || "잘못된 요청입니다."
      }),
      { status: error.response.status || 500 }
    );
  }
}
