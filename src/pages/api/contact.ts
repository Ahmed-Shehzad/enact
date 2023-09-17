// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sendMail } from "@http/services/mail.service";
import type { NextApiRequest, NextApiResponse } from "next";
import StatusCode from "status-code-enum";

type ContactRequest = {
  name: string;
  email: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactRequest>
) {
  const { name, email, message } = req.body as ContactRequest;

  const response = await sendMail(name, email, message);
  if (response.rejected.length > 0) {
    res.status(StatusCode.ServerErrorInternal).json({ name, email, message });
  } else if (response.accepted.length > 0) {
    res.status(StatusCode.SuccessOK).json({ name, email, message });
  }
}
