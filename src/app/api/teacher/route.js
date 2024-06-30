import { NextRequest, NextResponse } from "next/server";

export async function GET(req) {
  const page = req.nextUrl.searchParams.get("page") ?? 1;
  const limit = req.nextUrl.searchParams.get("limit") ?? 10;

  // TODO: Handle network error here
  const res = await fetch(
    `http://api.bike-csecu.com/api/teacher?page=${page}&limit=${limit}`
  );
  const result = await res.json();

  return NextResponse.json(result, { status: 200 });
}
