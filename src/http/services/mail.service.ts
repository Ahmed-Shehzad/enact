import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const sendMail = async (name: string, email: string, message: string) => {
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
    text: `Email Address: ${email}\n\n${message}`,
  };

  return await transporter.sendMail(mailOptions);
};

export { sendMail };
