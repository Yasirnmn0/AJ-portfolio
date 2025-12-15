import { NextResponse } from "next/server";
import dbConnect from "../../lib/monogdb";
import Contact from "../../models/Contact";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    await dbConnect();

    const { name, email, message } = await req.json();

    await Contact.create({ name, email, message });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Message",
      html: `
        <h3>New message from Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
