import { IUpdateBalance } from '../../../interfaces/account-interfaces/IUpdateBalance';
import prismaClient from '../../../prisma';

class UpdateBalance implements IUpdateBalance {
    async update(
        customerId: number,
        amount: number,
        description: string,
        action: 'ENTRADA' | 'CREDITO' | 'DEBITO' | 'PIX',
    ) {
        let balanceUpdate;
        if (action === 'ENTRADA') {
            balanceUpdate = { increment: amount };
        }
        if (action !== 'ENTRADA') {
            balanceUpdate = { decrement: amount };
        }
        const account = await prismaClient.account.update({
            where: { customerId: customerId },
            data: {
                balance: balanceUpdate,
                transactions: {
                    create: {
                        amount,
                        type: action,
                        description,
                    },
                },
            },
        });
        return account;
    }
}

export { UpdateBalance };
