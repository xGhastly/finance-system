import { IEditCustomerService } from '../../interfaces/user-interfaces/IEditCustomerService';
import bcrypt from 'bcrypt';
import prismaClient from '../../prisma';
import { IHashPasswordService } from '../../interfaces/user-interfaces/IHashPasswordService';
import { IValidatorService } from '../../interfaces/user-interfaces/IValidatorService';
import { ICreateCustomerProps } from '../../interfaces/user-interfaces/props/ICreateCustomerProps';
import { IFindPerUsername } from '../../interfaces/user-interfaces/IFindPerUsername';

class EditCustomerService implements IEditCustomerService {
    constructor(
        private readonly findCustomer: IFindPerUsername,
        private readonly hashPassword: IHashPasswordService,
        private readonly validatorService: IValidatorService<ICreateCustomerProps>,
    ) { }

    async editCustomer(
        username: string,
        name: string,
        email: string,
        password: string,
        newPassword?: string,
    ) {
        if (newPassword === undefined || newPassword === '') {
            newPassword = password;
        }
        this.validatorService.validate({
            username,
            name,
            email,
            password: newPassword,
        });
        const findedCustomer =
            await this.findCustomer.findPerUsername(username);
        if (!findedCustomer) {
            throw new Error('Usuário não encontrado');
        }

        if (!bcrypt.compareSync(password, findedCustomer.password)) {
            throw new Error('Senha atual inválida');
        }

        const newCustomerPassword = await this.hashPassword.hashPassword(
            newPassword,
            10,
        );

        const editedCustomer = await prismaClient.customer.update({
            where: { id: findedCustomer.id },
            data: {
                name,
                email,
                password: newCustomerPassword,
                updated_at: new Date(),
            },
        });

        return editedCustomer;
    }
}

export { EditCustomerService };
