"""
Email service for sending notifications via Gmail SMTP
"""
import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent.parent
load_dotenv(ROOT_DIR / '.env')

GMAIL_ADDRESS = os.environ.get('GMAIL_ADDRESS')
GMAIL_PASSWORD = os.environ.get('GMAIL_PASSWORD')
ADMIN_EMAIL = os.environ.get('ADMIN_EMAIL')


async def send_contact_email(name: str, email: str, message: str):
    """
    Send email notification when contact form is submitted
    """
    try:
        # Create message
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f"New Contact Form Submission from {name}"
        msg['From'] = GMAIL_ADDRESS
        msg['To'] = ADMIN_EMAIL

        # Email body
        text = f"""
Contact Form Submission

Name: {name}
Email: {email}
Message:
{message}

---
This is an automated notification from your portfolio website.
"""

        html = f"""
        <html>
            <body style="font-family: Arial, sans-serif; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5; border-radius: 8px;">
                    <h2 style="color: #00d9ff;">New Contact Form Submission</h2>
                    
                    <div style="background-color: white; padding: 20px; border-radius: 5px; margin: 15px 0;">
                        <p><strong>Name:</strong> {name}</p>
                        <p><strong>Email:</strong> <a href="mailto:{email}">{email}</a></p>
                        <p><strong>Message:</strong></p>
                        <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #00d9ff; white-space: pre-wrap;">
                            {message}
                        </p>
                    </div>
                    
                    <p style="color: #666; font-size: 12px; margin-top: 20px;">
                        This is an automated notification from your portfolio website.
                    </p>
                </div>
            </body>
        </html>
        """

        part1 = MIMEText(text, 'plain')
        part2 = MIMEText(html, 'html')
        msg.attach(part1)
        msg.attach(part2)

        # Send email using async SMTP
        async with aiosmtplib.SMTP(hostname='smtp.gmail.com', port=465, use_tls=True) as smtp:
            await smtp.login(GMAIL_ADDRESS, GMAIL_PASSWORD)
            await smtp.send_message(msg)

        print(f"✓ Email sent successfully to {ADMIN_EMAIL}")
        return True

    except Exception as e:
        print(f"✗ Error sending email: {str(e)}")
        # Don't raise error - let form submission succeed even if email fails
        return False
