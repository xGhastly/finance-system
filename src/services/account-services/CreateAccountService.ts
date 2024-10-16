import { ICreateAccountService } from '../../interfaces/account-interfaces/ICreateAccountService';
import { IFindOneCustomerService } from '../../interfaces/user-interfaces/IFindOneCustomerService';
import prismaClient from '../../prisma';

class CreateAccountService implements ICreateAccountService {
    constructor(private readonly findCustomer: IFindOneCustomerService) { }
    async createAccount(customerId: number) {
        const customerUser = await this.findCustomer.findOne({
            id: customerId,
        });
        const hasAccount = await prismaClient.account.findUnique({
            where: {
                customerId,
            },
        });
        if (hasAccount) {
            throw new Error('Usuário já possui uma conta.');
        }
        const account = await prismaClient.account.create({
            data: {
                customerId,
                ownerUser: customerUser.username,
            },
        });
        return account;
    }
}

export { CreateAccountService };
