import { IAccountProps } from './props/IAccountProps';

interface IExpenseService {
    addExpense(
        customerId: number,
        amount: number,
        description: string,
        method: 'CREDITO' | 'DEBITO' | 'PIX',
    ): Promise<IAccountProps>;
}
export { IExpenseService };
