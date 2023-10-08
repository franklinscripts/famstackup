//middleware.ts

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
    const pathName = req.nextUrl.pathname;

    const protectedPaths = ["/dashboard"];
    const isPathProtected = protectedPaths?.some((path) => pathName == path);
    const res = NextResponse.next();
    if(isPathProtected) {
        const token = await getToken({ req });
        if(!token){
            const url = new URL(`/login`, req.url);
            url.searchParams.set("",pathName);
            return NextResponse.redirect(url)
         }
    }
    return res;  
}
