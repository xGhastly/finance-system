import { IAccountProps } from './props/IAccountProps';

interface ICreateAccountService {
    createAccount(customerId: number): Promise<IAccountProps>;
}

export { ICreateAccountService };
