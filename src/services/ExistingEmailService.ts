import prismaClient from '../prisma';
import { IExistingEmailService } from '../interfaces/IExistingEmailService';

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
}

export { ExistingEmailService };
