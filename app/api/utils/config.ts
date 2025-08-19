
  const brevo = require('@getbrevo/brevo');
  let apiInstance = new brevo.TransactionalEmailsApi();


export async function sendContactUsEmail(
  email: string,
  name: string,
  phone: string,
  message: string,
  subject? : string
): Promise<void> {

  let apiKey = apiInstance.authentications['apiKey'];
  apiKey.apiKey = process.env.BREVO_API_KEY;

  let sendSmtpEmail = new brevo.SendSmtpEmail();

  sendSmtpEmail.subject = `New Contact Message from ${name}`;
  sendSmtpEmail.htmlContent = `
  <html>
  <head>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 20px auto;
        background: #ffffff;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        overflow: hidden;
      }
      .header {
        background: linear-gradient(90deg, #2c3e50, #3498db);
        color: white;
        padding: 20px;
        text-align: center;
        font-size: 22px;
        font-weight: bold;
      }
      .content {
        padding: 20px;
        color: #333333;
        font-size: 16px;
      }
      .info {
        background: #f9f9f9;
        padding: 15px;
        border-radius: 5px;
        margin-top: 15px;
      }
      .info p {
        margin: 5px 0;
      }
      .footer {
        text-align: center;
        padding: 15px;
        background: #ecf0f1;
        font-size: 13px;
        color: #7f8c8d;
      }
      @media (max-width: 600px) {
        .container {
          width: 90%;
        }
      }
    </style>
  <body>
    <div class="container">
      <div class="header">
        📩 New Contact Message
      </div>
      <div class="content">
        <p><strong>Hello BIA Team,</strong></p>
        <p>You have received a new message from the contact form on your website. Here are the details:</p>
        <div class="info">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="margin-left:10px; padding-left:10px; border-left:3px solid #3498db;">${message}</p>
        </div>
      </div>
      <div class="footer">
        Need help? Contact us at <a href="mailto:support@biafricantouch.com">support@biafricantouch.com</a><br/>
        &copy; 2025 BIA Team. All rights reserved.
      </div>
    </div>
  </body>
  </html>`;

  sendSmtpEmail.sender = { "name": "Tailors Dream College", "email": "no-reply@biafricantouch.com" };
  sendSmtpEmail.to = [
    { "email": "codereveur@gmail.com", "name": "Kamero Dev Team" },
    { "email": "support@biafricantouch.com", "name": "BIA Support Team" }
  ];
  sendSmtpEmail.replyTo = { "email": email, "name": name };
  sendSmtpEmail.headers = { "Some-Custom-Name": "unique-id-1234" };
  sendSmtpEmail.params = { "parameter": "My param value", "subject": "common subject" };
  
  
  apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data: any) {
    console.log('API called successfully. ');
  }, function (error: any) {
    console.error(error.body.message);
  });
}

export async function sendContactUsAutoReplyEmail(
  email: string,
  name: string,
): Promise<void> {

  let apiKey = apiInstance.authentications['apiKey'];
  apiKey.apiKey = process.env.BREVO_API_KEY;

  let sendSmtpEmail = new brevo.SendSmtpEmail();

  sendSmtpEmail.subject = `Thank You For Contacting BIA ${name}`;
  sendSmtpEmail.htmlContent = `
  <html>
  <head>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 20px auto;
        background: #ffffff;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        overflow: hidden;
      }
      .header {
        background: linear-gradient(90deg, #2c3e50, #3498db);
        color: white;
        padding: 20px;
        text-align: center;
        font-size: 22px;
        font-weight: bold;
      }
      .content {
        padding: 20px;
        color: #333333;
        font-size: 16px;
      }
      .info {
        background: #f9f9f9;
        padding: 15px;
        border-radius: 5px;
        margin-top: 15px;
      }
      .info p {
        margin: 5px 0;
      }
      .footer {
        text-align: center;
        padding: 15px;
        background: #ecf0f1;
        font-size: 13px;
        color: #7f8c8d;
      }
      @media (max-width: 600px) {
        .container {
          width: 90%;
        }
      }
    </style>
  <body>
    <div class="container">
      <div class="header">
        📩 Contact Support Message Received
      </div>
      <div class="content">
        <p>Hello <b>${name}</b>,</p>
        <div class="info">
          Thank you for contacting BIA the African Touch. Your message has been received, our team is responding soon. 
        </div>
      </div>
      <div class="footer">
        Need help? Contact us at <a href="mailto:support@biafricantouch.com">support@biafricantouch.com</a><br/>
        &copy; 2025 BIA Team. All rights reserved.
      </div>
    </div>
  </body>
  </html>`;

  sendSmtpEmail.sender = { "name": "Tailors", "email": "no-reply@biafricantouch.com" };
  sendSmtpEmail.to = [
    { "email": email, "name": name },
  ];
  sendSmtpEmail.replyTo = { "email": "support@biafricantouch.com", "name": "Kamero Support Team" };
  sendSmtpEmail.headers = { "Some-Custom-Name": "unique-id-1234" };
  sendSmtpEmail.params = { "parameter": "My param value", "subject": "common subject" };
  
  
  apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data: any) {
    console.log('API called successfully. ');
  }, function (error: any) {
    console.error(error.body.message);
  });
}

