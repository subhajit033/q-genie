'use server'

import { connectToDB } from "@/database/db";
import Subscriber from "@/database/models/subscribers.model";

export const getSubscriber = async (newsLetterOwnerId: string)=>{
    try {
        await connectToDB();
        const subscriber = await Subscriber.find({newsLetterOwnerId});
        
        return JSON.parse(JSON.stringify(subscriber))
    } catch (error) {
        console.log(error);
        
    }
}