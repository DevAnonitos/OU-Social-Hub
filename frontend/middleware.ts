import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server';
import { ClientRequest } from "http";
import { ResponseCookies, RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
};

