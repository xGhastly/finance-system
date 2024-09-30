import { ICustomerProps } from './Props/ICustomerProps';

interface IDeleteCustomerService {
    deleteCustomer({ id }: ICustomerProps): Promise<void>;
}

export { IDeleteCustomerService };
