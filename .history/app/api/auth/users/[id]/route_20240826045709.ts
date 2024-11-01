import { users } from "@/utils/user";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const { id } = await res.params;
  const data = users.filter((u) => u.id == id);

  return NextResponse.json({ data });
}

// Login users
export async function POST(req, res) {
  let {name, email, password } = await req.json();
  let {id} = res.params
  const {
    name: uName, 
    email: uEmail,
    password: uPassword,
  }= users.find((f) => f.id == id)
  if (!uName || !uEmail || !uPassword) {
    return NextResponse.json(
      { res: "all field are required" },
      { status: 404 }
    );
  } else if () {


    return NextResponse.json({ res: "user created successfully" });
  }
}