import { IListTransactionsService } from '../../interfaces/transactions-interfaces/IListTransactionsService';
import { IFindPerUsername } from '../../interfaces/user-interfaces/IFindPerUsername';
import prismaClient from '../../prisma';

class ListTransactionsService implements IListTransactionsService {
    constructor(private readonly findCustomer: IFindPerUsername) { }

    async listTransactions() {
        const transactionList = await prismaClient.transaction.findMany();
        return transactionList;
    }

    async listFilterTransactions(customerUser: string) {
        const customer = await this.findCustomer.findPerUsername(customerUser);
        const account = await prismaClient.account.findUnique({
            where: {
                customerId: customer.id,
            },
        });

        if (!account) {
            throw new Error('Usuário não possui uma conta.');
        }
        const transactionsToList = await prismaClient.transaction.findMany({
            where: {
                accountId: account.id,
            },
        });
        return transactionsToList;
    }
}

export { ListTransactionsService };
