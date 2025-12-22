// Cloudflare Worker for Contact Form with Resend
export default {
    async fetch(request, env, ctx) {
        // Handle CORS preflight
        if (request.method === 'OPTIONS') {
            return new Response(null, {
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                },
            });
        }

        if (request.method !== 'POST') {
            return new Response(JSON.stringify({ error: 'Method not allowed' }), {
                status: 405,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        try {
            const body = await request.json();
            const { fullName, email, phone, company, businessType, message, consent } = body;

            // Basic validation
            if (!fullName || fullName.length < 2) {
                return new Response(JSON.stringify({ error: 'Name is required' }), {
                    status: 400,
                    headers: corsHeaders(),
                });
            }
            if (!email || !email.includes('@')) {
                return new Response(JSON.stringify({ error: 'Valid email is required' }), {
                    status: 400,
                    headers: corsHeaders(),
                });
            }
            if (!phone || phone.length < 10) {
                return new Response(JSON.stringify({ error: 'Valid phone is required' }), {
                    status: 400,
                    headers: corsHeaders(),
                });
            }
            if (!consent) {
                return new Response(JSON.stringify({ error: 'Consent is required' }), {
                    status: 400,
                    headers: corsHeaders(),
                });
            }

            // Send email via Resend API
            const resendResponse = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${env.RESEND_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    from: 'AjansLokal <no-reply@ajanslokal.com>',
                    to: ['info@ajanslokal.com'],
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
                }),
            });

            if (!resendResponse.ok) {
                const error = await resendResponse.text();
                console.error('Resend error:', error);
                return new Response(JSON.stringify({ error: 'Failed to send email' }), {
                    status: 500,
                    headers: corsHeaders(),
                });
            }

            const data = await resendResponse.json();
            return new Response(JSON.stringify({ success: true, data }), {
                status: 200,
                headers: corsHeaders(),
            });

        } catch (error) {
            console.error('Worker error:', error);
            return new Response(JSON.stringify({ error: 'Internal server error' }), {
                status: 500,
                headers: corsHeaders(),
            });
        }
    },
};

function corsHeaders() {
    return {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    };
}
