import { users } from "@/utils/user";
import { NextResponse } from "next/server";

export function GET() {
  const data = users;

  return NextResponse.json(data);
}

export async function POST(req, res) {
  let { id, name, email, password } = await req.json();

  if (!id || !name || !email || !password) {
    return NextResponse.json(
      { res: "all field are required" },
      { status: 404 }
    );
  } else {
    return NextResponse.json({ res: "user created successfully" });
  }
}
