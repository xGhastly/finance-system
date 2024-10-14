import { ICustomerProps } from './props/ICustomerProps';

interface IListCustomerService {
    returnList(): Promise<ICustomerProps[]>;
    returnFilterList(name?: string, email?: string): Promise<ICustomerProps[]>;
}

export { IListCustomerService };
