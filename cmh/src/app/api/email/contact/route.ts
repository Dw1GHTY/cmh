import { NextRequest, NextResponse } from "next/server";
import Mail from "nodemailer/lib/mailer";
import { transport } from "../../../../../lib/nodemailer";

export async function POST(request: NextRequest) {
  const { name, surname, email } = await request.json();

  const mailOptions: Mail.Options = {
    from: process.env.COMPANY_EMAIL,
    to: process.env.COMPANY_EMAIL,
    subject: "Email from Complete Mobile Health customer", // Plain text subject line
    html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
      <h2 style="font-size: 20px; font-weight: bold;">Email from Complete Mobile Health customer</h2>
      <p><strong>NAME:</strong> ${name}</p>
      <p><strong>SURNAME:</strong> ${surname}</p>
      <p><strong>EMAIL:</strong> ${email}</p>
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
    console.error("Failed to send email:", e); // <--- LOG ERROR
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
