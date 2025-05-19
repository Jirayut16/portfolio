import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  try {
    const { data, error } = await resend.emails.send({
      from: `${name} From Portfolio Website <onboarding@resend.dev>`,
      to: "aomkimanew@gmail.com",
      subject: "Massage from Portfolio Website",
      replyTo: email,
      html: `
        <strong>From:</strong> ${name} (${email})<br/>
        <strong>Message:</strong><br/>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.log(error);
      return NextResponse.json({ error }, { status: 500 });
    }
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
