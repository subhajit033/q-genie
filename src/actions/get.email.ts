'use server'
import Email from "@/database/models/email.model";

import { connectToDB } from "@/database/db";


const getEmails = async (newsLetterOwnerId: string)=>{

    try {
        await connectToDB();
        const emails = await Email.find({newsLetterOwnerId})
        return emails;
    } catch (e:any) {
        throw new Error(e.message)
        
    }

}

export {getEmails}