import { ICustomerProps } from './ICustomerProps';
import { IDeleteCustomerProps } from './IDeleteCustomerProps';

interface IFindOneCustomerService {
    findOne({ id }: IDeleteCustomerProps): Promise<ICustomerProps>;
}

export { IFindOneCustomerService };
