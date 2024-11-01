import { users } from "@/utils/user";
import { NextResponse } from "next/server";

export function GET() {
  const data = users;

  return NextResponse.json(data);
}

export function POST(req, res) {
  let { username } = req.body;
  if (!username) {
    return NextResponse.json({ res: "username is required" });
  } else {
    console.log(username);
    return NextResponse.json({ res: "data post successfully" });
  }
}
