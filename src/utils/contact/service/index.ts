import BaseService from "@http";
import { IIdentifier } from "@http/common/utils";

interface IContact extends IIdentifier {
  name: string;
  email: string;
  message: string;
}

class ContactService extends BaseService<IContact> {
  constructor() {
    super("contact");
  }

  SendMail = (data: Omit<IContact, "id">) => contactService.create(data);
}

const contactService = new ContactService();
export { contactService as ContactService };
