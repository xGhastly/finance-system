import { ICustomerProps } from './props/ICustomerProps';
import { IDeleteCustomerProps } from './props/IDeleteCustomerProps';

interface IFindOneCustomerService {
    findOne({ id }: IDeleteCustomerProps): Promise<ICustomerProps>;
}

export { IFindOneCustomerService };
