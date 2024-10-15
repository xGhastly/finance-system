import { IAccountProps } from './props/IAccountProps';

interface IHasAccountService {
    hasAccount(customerId: number): Promise<IAccountProps>;
}

export { IHasAccountService };
