import { ICustomerProps } from './props/ICustomerProps';

interface IExistingEmailService {
    existingEmail(email: string): Promise<void>;
    findPerEmail(email: string): Promise<ICustomerProps>;
}

export { IExistingEmailService };
