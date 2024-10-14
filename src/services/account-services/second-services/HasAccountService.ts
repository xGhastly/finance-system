import prismaClient from '../../../prisma';

class HasAccountService {
    async hasAccount(customerId: number) {
        const account = await prismaClient.account.findUnique({
            where: {
                id: customerId,
            },
        });

        if (account) {
            return account;
        }
        throw new Error('Conta não encontrada');
    }
}

export { HasAccountService };
