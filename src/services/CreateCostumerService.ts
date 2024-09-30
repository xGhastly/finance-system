import prismaClient from '../prisma';
import { IValidatorService } from '../interfaces/IValidatorService';
import { IHashPasswordService } from '../interfaces/IHashPasswordService';
import { IExistingEmailService } from '../interfaces/IExistingEmailService';
import { ICreateCustomerProps } from '../interfaces/ICreateCustomerProps';

class CreateCustomerService {
    constructor(
        private readonly validatorService: IValidatorService<ICreateCustomerProps>,
        private readonly hashService: IHashPasswordService,
        private readonly emailService: IExistingEmailService,
    ) { }
    async execute({ name, email, password }: ICreateCustomerProps) {
        this.validatorService.validate({
            name,
            email,
            password,
        });

        const hashedPassword = await this.hashService.hashPassword(
            password,
            10,
        );
        await this.emailService.existingEmail(email);

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
