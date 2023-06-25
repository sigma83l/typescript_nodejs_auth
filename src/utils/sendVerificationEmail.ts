import sendEmail from './sendEmail';

interface VerificationEmailProps {
  name: string;
  email: string;
  verificationToken: string;
  origin: string;
}

const sendVerificationEmail = async ({
  name,
  email,
  verificationToken,
  origin,
}: VerificationEmailProps): Promise<void> => {
  const verifyEmail = `${origin}/user/verify-email?token=${verificationToken}&email=${email}`;

  const message = `<p>Please confirm your email by clicking on the following link : 
  <a href="${verifyEmail}">Verify Email</a> </p>`;

  await sendEmail({
    to: email,
    subject: 'Email Confirmation',
    html: `<h4> Hello, ${name}</h4>
    ${message}
    `,
  });
};

export default sendVerificationEmail;