import { NextResponse } from "next/server";

export async function GET() {
  let api_keys: any = process.env.OPENAI_API_KEY || [];
  if (api_keys) {
    const arr = api_keys.split(",");
    api_keys = arr;
  }
  return NextResponse.json({ keys: api_keys });
}
