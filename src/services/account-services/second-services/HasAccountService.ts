import { IHasAccountService } from '../../../interfaces/account-interfaces/IHasAccountservice';
import prismaClient from '../../../prisma';

class HasAccountService implements IHasAccountService {
    async hasAccount(customerId: number) {
        const account = await prismaClient.account.findUnique({
            where: {
                customerId: customerId,
            },
        });

        if (account) {
            return account;
        }
        throw new Error('Cliente não possui uma conta.');
    }
}

export { HasAccountService };
