import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Apenas permitir método POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    // Validação básica
    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const apiKey = process.env.MAILERLITE_API_KEY;
    const groupId = process.env.MAILERLITE_GROUP_ID;

    if (!apiKey || !groupId) {
      console.error('MailerLite configuration missing');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Fazer requisição para MailerLite
    const response = await fetch(`https://api.mailerlite.com/api/v2/groups/${groupId}/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-MailerLite-ApiKey': apiKey,
      },
      body: JSON.stringify({
        email: email,
        resubscribe: true,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Se o erro for 409 (já inscrito), consideramos sucesso
      if (response.status === 409) {
        return res.status(200).json({
          success: true,
          message: 'Email already subscribed',
          already_subscribed: true
        });
      }

      console.error('MailerLite API error:', data);
      return res.status(response.status).json({
        error: data.error?.message || data.message || 'Failed to subscribe'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Successfully subscribed',
      data
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
