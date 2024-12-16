import { NextRequest, NextResponse } from "next/server";
import Mail from "nodemailer/lib/mailer";
import { transport } from "../../../../../lib/nodemailer";

export async function POST(request: NextRequest) {
  const { name, surname, email } = await request.json();

  const mailOptions: Mail.Options = {
    from: process.env.COMPANY_EMAIL,
    to: process.env.COMPANY_EMAIL,
    subject: `A message from: ${email}`,
    text: `Name: ${name}, Surname ${surname}`,
  };
  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent!" });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
