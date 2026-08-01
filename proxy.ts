import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/dashboard/login")) {
    return NextResponse.next();
  }

  const auth = req.cookies.get("mc_dash_auth")?.value;
  const expected = process.env.DASHBOARD_PASSWORD;

  if (!expected || auth !== expected) {
    const loginUrl = new URL("/dashboard/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
};
