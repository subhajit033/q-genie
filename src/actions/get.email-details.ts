'use server';
import { connectToDB } from '@/database/db';
import Email from '@/database/models/email.model';

export const getEmailDetails = async ({
  title,
  newsLetterOwnerId,
}: {
  title: string;
  newsLetterOwnerId: string;
}) => {
  try {
    await connectToDB();
    const emailsDetails = await Email.findOne({ title, newsLetterOwnerId });
    /**
     * This error typically occurs when you're trying to pass data from a Server Component to a Client Component in Next.js, and the data includes objects that are not serializable. Next.js has restrictions on what types of data can be passed from Server Components to Client Components to ensure proper serialization.
    Common causes for this error include:

    Passing complex objects or instances of custom classes
    Passing functions or methods
    Objects with circular references
    Date objects (not serialized by default)
    Objects with null prototypes

    To resolve this issue, you can try the following approaches:

    Serialize your data:
    Convert complex objects to plain JavaScript objects. For example, if you're fetching data from a database, make sure to convert the results to plain objects.
     */
    return JSON.parse(emailsDetails?.content);
  } catch (error) {
    console.log(error);
  }
};
