import { IListAccountService } from '../../interfaces/account-interfaces/IListAccountService';
import { IFindPerUsername } from '../../interfaces/user-interfaces/IFindPerUsername';
import prismaClient from '../../prisma';

class ListAccountService implements IListAccountService {
    constructor(private readonly findCustomer: IFindPerUsername) { }

    async listAccounts() {
        const accountsList = await prismaClient.account.findMany();
        return accountsList;
    }

    async listFilterAccounts(customerUser: string) {
        const customer = await this.findCustomer.findPerUsername(customerUser);
        const accountToList = await prismaClient.account.findUnique({
            where: {
                customerId: customer.id,
            },
            include: {
                transactions: true,
            },
        });

        if (!accountToList) {
            throw new Error('Usuário não possui uma conta.');
        }
        return accountToList;
    }
}

export { ListAccountService };
