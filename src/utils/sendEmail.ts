import {createTransport, createTestAccount, SentMessageInfo} from 'nodemailer'
import nodemailerConfig from './nodemailerConfig'

interface emailBody {
    to: string;
    subject: string;
    html: string;
}

const sendEmail = async ({ to, subject, html }: emailBody): Promise<SentMessageInfo> => {
    let testAccount = await createTestAccount()

    const transporter = createTransport(nodemailerConfig)

    return transporter.sendMail({
        from: 'hmsdevelopment83@gmail.com',
        to,
        subject,
        html,
    })
}

export default sendEmail