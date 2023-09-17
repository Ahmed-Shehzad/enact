import BaseService from "@http";
import { IIdentifier } from "@http/common/utils";

interface IContact extends IIdentifier {
  name: string;
  email: string;
  message: string;
}

class ContactService extends BaseService<IContact> {
  constructor() {
    const localhost = "http://localhost:3000";
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    let apiURL = "";

    if (baseURL === localhost) {
      apiURL = `${localhost}/api/contact`;
    }

    super(apiURL);
  }

  SendMail = (data: Omit<IContact, "id">) => contactService.create(data);
}

const contactService = new ContactService();
export { contactService as ContactService };
