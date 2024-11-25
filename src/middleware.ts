import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/auth";

type Role = keyof typeof roleBasedRoutes;

const authRoutes = ["/login", "/signup", "/forget-password"];
const roleBasedRoutes = {
  User: [
    "/profile",
    "/settings",
    "/settings/manage-blogs",
  ],
  Admin: [
    "/admin",
    "/profile",
    "/admin/dashboard",
    "/admin/manage-users",
    "/admin/all-payments",
    "/admin/manage-blogs",
    "/settings",
    "/settings/manage-blogs",
  ],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request?.nextUrl;

 

  const user = await getCurrentUser();

  if (!user) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url)
      );
    }
  }

  if (user?.role && roleBasedRoutes[user?.role as Role]) {
    const routes = roleBasedRoutes[user?.role as Role];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/profile",
    "/profile/:path*",
    "/profile/:page*",
    "/admin/:page*",
    "/login",
    "/signup",
    "/forget-password",
    "/settings",
    "/settings/manage-blogs",
    "/admin/manage-blogs",
    "/admin/dashboard",
    "/admin/manage-users",
    "/admin/all-payments",
  ],
};
