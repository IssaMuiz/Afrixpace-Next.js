import { users } from "@/utils/user";
import { NextResponse } from "next/server";

export function GET(req, res) {
  const { id } = res.params;
  const data = users.filter((u) => u.id === id);

  return NextResponse.json({ data });
}
