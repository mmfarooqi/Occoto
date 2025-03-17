export async function POST(request: Request) {
  try {
    const { name, email, phone, company, service, message } = await request.json();
    
    // Here you would typically send an email or save to a database
    console.log('Received contact form submission:', { name, email, phone, company, service, message });
    
    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(JSON.stringify({ message: 'Failed to send message' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 