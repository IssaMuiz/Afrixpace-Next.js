import { users } from "@/utils/user";
import { NextResponse } from "next/server";

export function GET() {
  const data = users;

  return NextResponse.json(data);
}

export async function POST(req, res) {
  let { username, age } = await req.json();
  if (!username || !age) {
    return NextResponse.json({ res: "username is required" }, { status: 404 });
  } else {
  }
  console.log(username);
  return NextResponse.json({ res: "data post successfully" });
}
