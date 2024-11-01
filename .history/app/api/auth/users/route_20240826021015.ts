import { users } from "@/utils/user";
import { NextResponse } from "next/server";
export function GET() {
  const data = users;

  NextResponse.json(data);
}
