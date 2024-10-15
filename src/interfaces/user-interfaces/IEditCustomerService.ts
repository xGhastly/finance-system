import { ICustomerProps } from './props/ICustomerProps';

interface IEditCustomerService {
    editCustomer(
        username: string,
        name: string,
        email: string,
        password: string,
        newPassword: string,
    ): Promise<ICustomerProps>;
}

export { IEditCustomerService };
