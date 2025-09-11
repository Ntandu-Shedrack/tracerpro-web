import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/dashboard", "/projects", "/builder", "/submissions"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only run middleware for protected routes
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected) {
    // ✅ Check if auth cookie exists
    const token = request.cookies.get("auth_token")?.value;

    if (!token) {
      // No auth cookie → redirect to sign-in
      const url = request.nextUrl.clone();
      url.pathname = "/sign-in";
      return NextResponse.redirect(url);
    }

    try {
      // ✅ Option 1: Validate cookie by calling backend
      // (backend should check session validity against DB/Redis/etc.)
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/validate-session`,
        {
          method: "GET",
          headers: {
            Cookie: `auth_token=${token}`, // send cookie to backend
          },
        }
      );

      const data = await res.json();

      if (!res.ok || !data.valid) {
        const url = request.nextUrl.clone();
        url.pathname = "/sign-in";
        return NextResponse.redirect(url);
      }

      // ✅ Option 2: (If using JWT in cookies)
      // You could decode/verify token directly here instead of calling backend.
      // e.g. use jose/jwt to verify signature with secret.
    } catch (err) {
      console.error("Cookie validation failed:", err);
      const url = request.nextUrl.clone();
      url.pathname = "/sign-in";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/projects/:path*",
    "/builder/:path*",
    "/submissions/:path*",
  ],
};
