import { IDeleteCustomerProps } from './props/IDeleteCustomerProps';

interface IDeleteCustomerService {
    deleteCustomer({ id }: IDeleteCustomerProps): Promise<{ message: string }>;
}

export { IDeleteCustomerService };
