import { ICreateCustomerProps } from './props/ICreateCustomerProps';

interface ICreateCustomerService {
    createCustomer({
        username,
        name,
        email,
        password,
    }: ICreateCustomerProps): Promise<ICreateCustomerProps>;
}

export { ICreateCustomerService };
