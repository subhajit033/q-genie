import { NextRequest } from "next/server"

export const GET = async (req:NextRequest)=>{
    const searchParams = req.nextUrl.searchParams
    const query = searchParams.get('userId')
    console.log(query);
    return new Response('Done..')

}