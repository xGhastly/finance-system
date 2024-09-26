import prismaClient from '../prisma';
import bcrypt from 'bcrypt';
import { createCustomerValidator } from '../controllers/validator';

interface CreateCustomerProps {
    name: string;
    email: string;
    password: string;
}

class CreateCustomerService {
    async execute({ name, email, password }: CreateCustomerProps) {
        if (!name || !email || !password) {
            throw new Error('Preencha todos os campos');
        }
        const { error } = createCustomerValidator.validate({
            name,
            email,
            password,
        });

        if (error) {
            throw new Error(error.details[0].message);
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const existingEmail = await prismaClient.customer.findUnique({
            where: {
                email: email,
            },
        });

        if (existingEmail) {
            throw new Error('Email já cadastrado');
        }

        const customer = await prismaClient.customer.create({
            data: {
                name,
                email,
                password: hashedPassword,
                status: true,
            },
        });
        return customer;
    }
}

export { CreateCustomerService };
