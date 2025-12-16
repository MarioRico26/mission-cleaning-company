import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function clean(s: unknown) {
  return typeof s === "string" ? s.trim() : "";
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = clean(body.name);
    const email = clean(body.email);
    const phone = clean(body.phone);
    const serviceType = clean(body.serviceType);
    const business = clean(body.business);
    const message = clean(body.message);

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields (name, email, message)." },
        { status: 400 }
      );
    }

    // Gmail SMTP (recomendado: App Password, NO tu password normal)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_GMAIL_USER,
        pass: process.env.CONTACT_GMAIL_APP_PASSWORD,
      },
    });

    const to = process.env.CONTACT_TO_EMAIL || "missioncleaningcomp@gmail.com";

    const subject = `New website lead: ${name}${serviceType ? ` (${serviceType})` : ""}`;

    const text = [
      `New contact form submission`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "N/A"}`,
      `Service Type: ${serviceType || "N/A"}`,
      `Business / Location: ${business || "N/A"}`,
      ``,
      `Message:`,
      message,
    ].join("\n");

    await transporter.sendMail({
      from: `"Mission Cleaning Website" <${process.env.CONTACT_GMAIL_USER}>`,
      to,
      replyTo: email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Failed to send message." },
      { status: 500 }
    );
  }
}
