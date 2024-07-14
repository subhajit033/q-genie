'use server';
import Email from '@/database/models/email.model';

import { connectToDB } from '@/database/db';

export const deleteEmail = async (emailId: string) => {
    
  try {
    await connectToDB();
    const res = await Email.findByIdAndDelete(emailId);
    if (!res) {
      throw new Error(`No such campgain present with ${emailId} id`);
    }
    return { message: 'campgain deleted successfully' };
  } catch (e: any) {
    return { message: e.message };
  }
};
