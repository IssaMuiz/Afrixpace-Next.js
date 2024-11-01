import { users } from "@/utils/user";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const { id } = await res.params;
  const data = users.filter((u) => u.id === id);

  return NextResponse.json({ data });
}
