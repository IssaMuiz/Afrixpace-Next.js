import { users } from "@/utils/user";
import { NextResponse } from "next/server";

export function GET() {
  const data = users;

  return NextResponse.json(data);
}
