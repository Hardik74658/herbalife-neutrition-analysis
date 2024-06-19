import { NextRequest,NextResponse } from "next/server";
export {default} from 'next-auth/middleware'
import { getToken } from "next-auth/jwt";
export async function middleware(request:NextRequest){

    const token = await getToken({req:request})
    const url = request.nextUrl

    
    
    if(token && 
        (
            url.pathname.startsWith('/login') || 
            url.pathname.startsWith('/home') || 
            url.pathname.startsWith('/signup') 
            
        )
    ){
        console.log(url.pathname)
        return NextResponse.redirect(new URL('/',request.url))
    }
}

export const config = {
    matcher: [
        '/login',
        '/signup',
        '/home'
    ]
}