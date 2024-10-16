import { IAccountProps } from './props/IAccountProps';

interface IListAccountService {
    listAccounts(): Promise<IAccountProps[]>;
    listFilterAccounts(customerUser: string): Promise<IAccountProps>;
}

export { IListAccountService };
