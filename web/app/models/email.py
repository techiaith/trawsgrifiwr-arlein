import smtplib
import ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def sendMail(config, receiver_email, subject, text, html):

    message = MIMEMultipart("alternative")
    message["Subject"] = subject
    message["From"] = config['email.sender_email']
    message["To"] = receiver_email

    # Turn these into plain/html MIMEText objects
    part1 = MIMEText(text, "plain")
    part2 = MIMEText(html, "html")

    # Add HTML/plain-text parts to MIMEMultipart message
    # The email client will try to render the last part first
    message.attach(part1)
    message.attach(part2)

    # Create secure connection with server and send email
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL(config['email.server'],
                          465,
                          context=context) as server:
        server.login(config['email.sender_email'], config['email.password'])
        server.sendmail(
            config['email.sender_email'], receiver_email, message.as_string()
        )
