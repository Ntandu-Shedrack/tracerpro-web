import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/homes", "/settingss", "/builder", "/submissions"];

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;
  const { pathname } = request.nextUrl;

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected) {
    if (!token) {
      // No token, redirect to sign-in
      const url = request.nextUrl.clone();
      url.pathname = "/sign-in";
      return NextResponse.redirect(url);
    }

    try {
      // Validate token with backend
      const backendUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth/validate-token`;

      const res = await fetch(backendUrl, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      if (!res.ok || !data.valid) {
        // Token invalid or expired
        const url = request.nextUrl.clone();
        url.pathname = "/sign-in";
        return NextResponse.redirect(url);
      }
    } catch (err) {
      console.error("Token validation failed:", err);
      const url = request.nextUrl.clone();
      url.pathname = "/sign-in";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/home/:path*",
    "/settings/:path*",
    "/builder/:path*",
    "/submissions/:path*",
  ],
};
