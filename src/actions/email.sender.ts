'use server'
import nodemailer from 'nodemailer';

interface MailOptions {
  from: string;
  subject: string;
  html: string;
  to?: string;
}

const username  =  process.env.EMAIL_USERNAME;
const password = process.env.EMAIL_PASSWORD;
console.log(username, password);
const transporter = nodemailer.createTransport({
  service: 'gmail',
  
  auth: {
    user: username,
    pass: password,
  },
});

export async function sendBulkEmails(
  subscribers: any[],
  subject: string,
  htmlContent: string
) {
  const mailOptions: MailOptions = {
    from: 'your-email@gmail.com',
    subject: subject,
    html: htmlContent,
  };

  for (const subscriber of subscribers) {
    try {
      mailOptions.to = subscriber?.email;
      await transporter.sendMail(mailOptions);
      console.log(`Email sent to ${subscriber.email}`);
    } catch (error) {
      console.error(`Failed to send email to ${subscriber?.email}:`, error);
    }
  }
}
