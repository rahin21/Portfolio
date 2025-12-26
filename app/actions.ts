'use server';

export async function sendEmail(formData: FormData) {
  const service_id = process.env.EMAILJS_SERVICE_ID;
  const template_id = process.env.EMAILJS_TEMPLATE_ID;
  const user_id = process.env.EMAILJS_PUBLIC_KEY;
  const private_key = process.env.EMAILJS_PRIVATE_KEY;

  if (!service_id || !template_id || !user_id || !private_key) {
    return { success: false, message: 'EmailJS configuration missing on server.' };
  }

  const template_params = {
    user_name: formData.get('user_name'),
    user_email: formData.get('user_email'),
    user_contact: formData.get('user_contact'),
    message: formData.get('message'),
  };

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id,
        template_id,
        user_id,
        accessToken: private_key,
        template_params,
      }),
    });

    if (response.ok) {
      return { success: true, message: 'Message sent successfully!' };
    } else {
      const errorText = await response.text();
      console.error('EmailJS API Error:', errorText);
      return { success: false, message: 'Failed to send message. Please try again.' };
    }
  } catch (error) {
    console.error('EmailJS Server Action Error:', error);
    return { success: false, message: 'An unexpected error occurred.' };
  }
}
