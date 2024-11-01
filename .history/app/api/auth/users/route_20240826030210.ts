import { users } from "@/utils/user";
import { NextResponse } from "next/server";

export function GET() {
  const data = users;

  return NextResponse.json(data);
}

export function POST(req, res) {
  let { username } = req.json();
  if (username) {
    return NextResponse.json({ res: "username is required" }, { status: 404 });
  }
  console.log(username);
  return NextResponse.json({ res: "data post successfully" });
}
