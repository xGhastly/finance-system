import { ICustomerProps } from './ICustomerProps';

interface IDeleteCustomerService {
    deleteCustomer({ id }: ICustomerProps): Promise<void>;
}

export { IDeleteCustomerService };
