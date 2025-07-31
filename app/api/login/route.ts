/* eslint-disable @typescript-eslint/no-explicit-any */
import { loginUser } from "@/actions/user.actions";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await loginUser(body);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 401 });
  }
}
