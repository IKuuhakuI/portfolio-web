import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Luiz <luizcarlosaguiarc@gmail.com>",
      to: ["luizcarlosaguiarc@gmail.com"],
      subject: "Hello World",
      react: (
        <>
          <p>Email Body</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
