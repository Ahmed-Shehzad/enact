import { LOCAL_HOST } from "@constants";
import BaseService from "@http";
import { IIdentifier } from "@http/common/utils";

interface IContact extends IIdentifier {
  name: string;
  email: string;
  message: string;
}

class ContactService extends BaseService<IContact> {
  Host = (host: string) => {
    if (host === LOCAL_HOST) {
      super.setBaseURL(`${host}/api/contact`);
    } else {
      super.setBaseURL(`${host}`);
    }
  };

  SendMail = (data: Omit<IContact, "id">) => contactService.create(data);
}

const contactService = new ContactService();
export { contactService as ContactService };
