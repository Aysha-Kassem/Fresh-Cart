import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;  

  const login = [
    "/",
    "/cart",
    "/wish-list",
    "/prodeuts",
    "/prodeut",
    "/categories",
    "/brands",
  ];

  const logout = ["/login", "/register"];

  if (!token && login.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && logout.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/cart/:path*",
    "/wish-list/:path*",
    "/prodeuts/:path*",
    "/prodeut/:path*",
    "/categories/:path*",
    "/brands/:path*",
    "/login",
    "/register",
  ],
};
