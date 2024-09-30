import { ICustomerProps } from './Props/ICustomerProps';
import { IDeleteCustomerProps } from './Props/IDeleteCustomerProps';

interface IFindOneCustomerService {
    findOne({ id }: IDeleteCustomerProps): Promise<ICustomerProps>;
}

export { IFindOneCustomerService };
