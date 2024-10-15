import { IHasAccountService } from '../../interfaces/account-interfaces/IHasAccountservice';
import { IIncomeAccountService } from '../../interfaces/account-interfaces/IIncomeAccountService';
import { IUpdateBalance } from '../../interfaces/account-interfaces/IUpdateBalance';

class IncomeAccountService implements IIncomeAccountService {
    constructor(
        private readonly hasAccount: IHasAccountService,
        private readonly updateAccount: IUpdateBalance,
    ) { }

    async addIncome(customerId: number, amount: number, description: string) {
        await this.hasAccount.hasAccount(customerId);

        const account = await this.updateAccount.update(
            customerId,
            amount,
            description,
            'ENTRADA',
        );

        return account;
    }
}

export { IncomeAccountService };
