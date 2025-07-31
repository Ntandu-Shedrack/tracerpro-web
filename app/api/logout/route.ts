import { logoutUser } from "@/actions/user.actions";
import { NextResponse } from "next/server";

export async function POST() {
  logoutUser();
  return NextResponse.json({ success: true });
}
