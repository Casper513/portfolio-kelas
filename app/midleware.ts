import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const allowedOrigins = [
  'http://localhost:3000',
  'https://3000-idx-portfolio-kelas-1717907447160.cluster-fu5knmr55rd44vy7k7pxk74ams.cloudworkstations.dev/'
  // Tambahkan asal lain yang diizinkan di sini
];

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const origin = req.headers.get("origin");

  if (origin && allowedOrigins.includes(origin)) {
    res.headers.append('Access-Control-Allow-Origin', origin);
  }

  res.headers.append('Access-Control-Allow-Credentials', "true");
  res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT');
  res.headers.append(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  return res;
}

export const config = {
  matcher: '/api/:path*',
};
