import prismaClient from '../../prisma';
import { IValidatorService } from '../../interfaces/user-interfaces/IValidatorService';
import { IHashPasswordService } from '../../interfaces/user-interfaces/IHashPasswordService';
import { IExistingEmailService } from '../../interfaces/user-interfaces/IExistingEmailService';
import { ICreateCustomerProps } from '../../interfaces/user-interfaces/props/ICreateCustomerProps';
import { ICreateCustomerService } from '../../interfaces/user-interfaces/ICreateCustomerService';
import { IFindPerUsername } from '../../interfaces/user-interfaces/IFindPerUsername';

class CreateCustomerService implements ICreateCustomerService {
    constructor(
        private readonly validatorService: IValidatorService<ICreateCustomerProps>,
        private readonly hashService: IHashPasswordService,
        private readonly emailService: IExistingEmailService,
        private readonly userService: IFindPerUsername,
    ) { }
    async createCustomer({
        username,
        name,
        email,
        password,
    }: ICreateCustomerProps) {
        this.validatorService.validate({
            username,
            name,
            email,
            password,
        });

        const hashedPassword = await this.hashService.hashPassword(
            password,
            10,
        );
        await this.userService.existingUsername(username);
        await this.emailService.existingEmail(email);
        const customer = await prismaClient.customer.create({
            data: {
                username,
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
