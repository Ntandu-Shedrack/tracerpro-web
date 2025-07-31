import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define protected routes
const protectedRoutes = ["/dashboard", "/forms", "/builder", "/submissions"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value; // or use "accessToken", "auth", etc.

  const { pathname } = request.nextUrl;

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected && !token) {
    // Redirect to sign-in if not authenticated
    const url = request.nextUrl.clone();
    url.pathname = "/sign-in";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/forms/:path*",
    "/builder/:path*",
    "/submissions/:path*",
  ],
};
