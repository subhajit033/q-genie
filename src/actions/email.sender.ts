'use server'
import nodemailer from 'nodemailer';

interface MailOptions {
  from: string;
  subject: string;
  html: string;
  to?: string;
}
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
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
      console.log(`Email sent to ${subscriber}`);
    } catch (error) {
      console.error(`Failed to send email to ${subscriber}:`, error);
    }
  }
}
