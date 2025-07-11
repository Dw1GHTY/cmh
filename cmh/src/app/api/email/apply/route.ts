import EmailTemplate from "@/components/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import React from "react";
import { Resend } from "resend";

export async function POST(request: NextRequest){

  const {submittedName, submittedSurname, submittedEmail, submittedMessage} = await request.json();
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const {data, error} = await resend.emails.send({
      from: `${process.env.COMPANY_EMAIL}`,
      to: `${process.env.COMPANY_EMAIL}`,
      subject: "An email from a customer of Complete Mobile Health",
      
      react: EmailTemplate({
        name: submittedName, 
        surname: submittedSurname, 
        email: submittedEmail,
        message: submittedMessage
      }) as React.ReactElement
    })
    if(error){
      console.error("Resend error: ", error);
      return NextResponse.json({error: error.message}, {status: 500});
    }
    return NextResponse.json({data: data?.id});
  } catch (e) {
    return NextResponse.json({error: e});
  } 

}
