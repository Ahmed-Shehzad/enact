import { NextApiResponse } from "next";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import StatusCode from "status-code-enum";

const sendMail = (
  response: NextApiResponse<any>,
  name: string,
  email: string,
  message: string
) => {
  const auth = {
    user: process.env.NODEMAILER_EMAIL ?? "",
    pass: process.env.NODEMAILER_PASSWORD ?? "",
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: true, // use SSL
    authMethod: "PLAIN",
    auth: {
      type: "login",
      ...auth,
    },
  });

  const mailOptions: Mail.Options = {
    from: email,
    to: auth.user,
    subject: `Message From: ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (err, res) => {
    if (err) {
      console.error(err);
      response
        .status(StatusCode.ServerErrorInternal)
        .json({ name, email, message });
    } else {
      console.info("The email was sent successfully");
      response.status(StatusCode.SuccessOK).json({ name, email, message });
    }
  });
};

export { sendMail };
