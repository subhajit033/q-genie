'use server';
import Email from '@/database/models/email.model';

import { connectToDB } from '@/database/db';
interface EmailProps {
  title: string;
  content: string;
  newsLetterOwnerId: string;
}

const saveEmail = async ({ title, content, newsLetterOwnerId }: EmailProps) => {
  try {
    await connectToDB();
    const email = await Email.findOne({ title, newsLetterOwnerId });
    if (email) {
      await Email.findByIdAndUpdate(
        email._id,
        {content},
        { new: true, runValidators: true }
      );
      return { message: 'Email updated successfully' };
    } else {
      await Email.create({ title, content, newsLetterOwnerId });
      return { message: 'Email saved successfully' };
    }
  } catch (e) {
    console.log(e);
  }
};

export { saveEmail };
