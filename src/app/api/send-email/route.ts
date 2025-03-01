import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, message, recipients } = body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Name, email and message are required' },
        { status: 400 }
      );
    }
    
    // For now, we'll log the data and simulate a successful submission
    // This is a temporary solution until email sending is properly configured
    console.log('Form submission received:');
    console.log('To:', recipients);
    console.log('From:', email);
    console.log('Name:', name);
    console.log('Company:', company);
    console.log('Service:', service);
    console.log('Message:', message);
    
    // In a production environment, you would use an email service
    // like SendGrid, Mailgun, or AWS SES
    
    // Simulate successful submission
    return NextResponse.json({ message: 'Form submitted successfully' });
    
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { message: 'Failed to process your submission' },
      { status: 500 }
    );
  }
} 