import BaseService from "@http";
import { IIdentifier } from "@http/common/utils";

interface IContact extends IIdentifier {
  name: string;
  email: string;
  message: string;
}

class ContactService extends BaseService<IContact> {
  constructor() {
    const url = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
    const path = url.includes("http://localhost:3000") ? "contact" : "";
    super(path);
  }

  SendMail = (data: Omit<IContact, "id">) => contactService.create(data);
}

const contactService = new ContactService();
export { contactService as ContactService };
