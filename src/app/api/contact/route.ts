import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

export const runtime = 'edge';

const resend = new Resend(process.env.RESEND_API_KEY || 're_123');

const contactSchema = z.object({
    fullName: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(10),
    company: z.string().optional(),
    businessType: z.string().optional(),
    message: z.string().optional(),
    consent: z.boolean().refine((val) => val === true),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const result = contactSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { error: 'Invalid input', details: result.error.issues },
                { status: 400 }
            );
        }

        const { fullName, email, phone, company, businessType, message } = result.data;

        const { data, error } = await resend.emails.send({
            from: 'AjansLokal <no-reply@ajanslokal.com>',
            to: ['info@ajanslokal.com'], // Deliver to admin
            subject: `Yeni İletişim Talebi: ${fullName}`,
            html: `
        <h2>Yeni İletişim Formu Başvurusu</h2>
        <p><strong>Ad Soyad:</strong> ${fullName}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Şirket:</strong> ${company || '-'}</p>
        <p><strong>İşletme Türü:</strong> ${businessType || '-'}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message || '-'}</p>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
