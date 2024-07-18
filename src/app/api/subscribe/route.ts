import { connectToDB } from "@/database/db";
import { subscribe } from "@/actions/add.subscribe";
import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from 'jsonwebtoken'


export const POST = async (req:NextRequest)=>{
   try {
     const body = await req.json();
     const apiKey = body?.apiKey;
     const email = body?.email;
     const {user} = jwt.verify(apiKey, process.env.JWT_SECRET_KEY!) as JwtPayload;
      const res = await subscribe({email, username:user?.username as string})
      if(res.error){
        return Response.json({
          ststus: false,
          message: 'Either Email is not valid or user with this emailId already subscribed to this newsletter'
        }, {status:400})
      }
     return Response.json({
      status: true,
      message: 'You are succesfully subscribed'
     }, {status: 200})
   } catch (error) {
    return new Response('Internal error', {status: 500})
    
   }


}