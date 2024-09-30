import { ICustomerProps } from './Props/ICustomerProps';

interface IExistingEmailService {
    existingEmail(email: string): Promise<void>;
    findPerEmail(email: string): Promise<ICustomerProps>;
}

export { IExistingEmailService };
