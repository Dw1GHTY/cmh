import { NextRequest, NextResponse } from "next/server";
import Mail from "nodemailer/lib/mailer";
import { transport } from "../../../../../lib/nodemailer";

export async function POST(request: NextRequest) {
  const { name, surname, email, message } = await request.json();

  const mailOptions: Mail.Options = {
    from: process.env.COMPANY_EMAIL,
    to: process.env.COMPANY_EMAIL,
    subject: "Email from Complete Mobile Health customer",
    html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
      <h2 style="font-size: 20px; font-weight: bold;">Email from Complete Mobile Health customer</h2>
      <p><strong>NAME:</strong> ${name}</p>
      <p><strong>SURNAME:</strong> ${surname}</p>
      <p><strong>EMAIL:</strong> ${email}</p>
      <p><strong>Customer's Message:</strong><br>${message}</p>
    </div>
  `,
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
