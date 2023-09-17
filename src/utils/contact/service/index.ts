import BaseService from "@http";
import { IIdentifier } from "@http/common/utils";

interface IContact extends IIdentifier {
  name: string;
  email: string;
  message: string;
}

class ContactService extends BaseService<IContact> {
  SendMail = (host: string, data: Omit<IContact, "id">) => {
    super.setBaseURL(`${host}/api/contact`);
    return contactService.create(data);
  };
}

const contactService = new ContactService();
export { contactService as ContactService };
