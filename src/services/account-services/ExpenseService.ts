import { IExpenseService } from '../../interfaces/account-interfaces/IExpenseService';
import { IHasAccountService } from '../../interfaces/account-interfaces/IHasAccountservice';
import { IUpdateBalance } from '../../interfaces/account-interfaces/IUpdateBalance';

class ExpenseService implements IExpenseService {
    constructor(
        private readonly hasAccount: IHasAccountService,
        private readonly updateAccount: IUpdateBalance,
    ) { }
    async addExpense(
        customerId: number,
        amount: number,
        description: string,
        method: 'CREDITO' | 'DEBITO' | 'PIX',
    ) {
        await this.hasAccount.hasAccount(customerId);

        const account = await this.updateAccount.update(
            customerId,
            amount,
            description,
            method,
        );

        return account;
    }
}

export { ExpenseService };
