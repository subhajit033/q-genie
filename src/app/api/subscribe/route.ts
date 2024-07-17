import { connectToDB } from "@/database/db";
import { subscribe } from "@/actions/add.subscribe";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import { decode } from "punycode";

export const POST = async (req:NextRequest)=>{
   try {
     const body = await req.json();
     const apiKey = body?.apiKey;
     const decoded = jwt.verify(apiKey, process.env.JWT_SECRET_KEY!)
     console.log(decoded);
   } catch (error) {
    return new Response('Internal error', {status: 500})
    
   }


}