import { IFindPerUsername } from '../../../interfaces/user-interfaces/IFindPerUsername';
import { ICustomerProps } from '../../../interfaces/user-interfaces/props/ICustomerProps';
import prismaClient from '../../../prisma';

class FindPerUsername implements IFindPerUsername {
    async existingUsername(username: string) {
        const usernameToFind = await prismaClient.customer.findUnique({
            where: {
                username: username,
            },
        });

        if (usernameToFind) {
            throw new Error('Username já cadastrado');
        }
    }

    async findPerUsername(username: string): Promise<ICustomerProps> {
        const usernameToFind = await prismaClient.customer.findUnique({
            where: {
                username: username,
            },
        });

        if (!usernameToFind) {
            throw new Error('Username inexistente');
        }
        return usernameToFind;
    }
}

export { FindPerUsername };
