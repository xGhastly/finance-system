import prismaClient from '../../prisma';
import { IExistingEmailService } from '../../interfaces/IExistingEmailService';
import { ICustomerProps } from '../../interfaces/Props/ICustomerProps';

class ExistingEmailService implements IExistingEmailService {
    async existingEmail(email: string) {
        const emailToFind = await prismaClient.customer.findUnique({
            where: {
                email: email,
            },
        });

        if (emailToFind) {
            throw new Error('Email já cadastrado');
        }
    }

    async findPerEmail(email: string): Promise<ICustomerProps> {
        const emailToFind = await prismaClient.customer.findUnique({
            where: {
                email: email,
            },
        });

        if (!emailToFind) {
            throw new Error('Email inexistente');
        }
        return emailToFind;
    }
}

export { ExistingEmailService };
