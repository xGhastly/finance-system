import { ICustomerProps } from './props/ICustomerProps';

interface IEditCustomerService {
    editCustomer(
        id: number,
        username: string,
        name: string,
        email: string,
        password: string,
        newPassword: string,
    ): Promise<ICustomerProps>;
}

export { IEditCustomerService };
