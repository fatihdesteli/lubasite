import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate data
    const validatedData = contactSchema.parse(body);

    // Check honeypot
    if (validatedData.honeypot) {
      return NextResponse.json({ error: 'Invalid submission' }, { status: 400 });
    }

    // TODO: Send email using Resend
    // For now, just log the data
    console.log('Contact form submission:', validatedData);

    // In production, you would use Resend:
    /*
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
      subject: `New Contact Form Submission from ${validatedData.name}`,
      react: ContactEmail(validatedData),
    });

    if (error) {
      throw new Error(error.message);
    }
    */

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
