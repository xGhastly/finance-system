import { ICustomerProps } from './props/ICustomerProps';

interface IFindPerUsername {
    existingUsername(username: string): Promise<void>;
    findPerUsername(username: string): Promise<ICustomerProps>;
}

export { IFindPerUsername };
