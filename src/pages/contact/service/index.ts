import BaseService from "@http";
import { IIdentifier } from "@http/common/utils";
import axios from "axios";

interface IContact extends IIdentifier {
  name: string;
  email: string;
  message: string;
}

class ContactService extends BaseService<IContact> {
  constructor() {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    const service = axios.create({
      baseURL: `${baseURL}/api/contact`,
      headers: {
        "Content-type": "application/json",
      },
    });
    super(service);
  }
}

const contactService = new ContactService();
const SendMail = (data: Omit<IContact, "id">) => contactService.create(data);
export { SendMail };
