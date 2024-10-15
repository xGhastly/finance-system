import { IAccountProps } from './props/IAccountProps';

interface IIncomeAccountService {
    addIncome(
        customerId: number,
        amount: number,
        description: string,
    ): Promise<IAccountProps>;
}

export { IIncomeAccountService };
