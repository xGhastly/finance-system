import { IExistingEmailService } from '../interfaces/IExistingEmailService';
import { IJwtService } from '../interfaces/IJwtService';
import bcrypt from 'bcrypt';
import { ILoginCustomerService } from '../interfaces/ILoginCustomerService';

class LoginCustomerService implements ILoginCustomerService {
    constructor(
        private readonly findPerEmail: IExistingEmailService,
        private readonly jwtService: IJwtService,
    ) { }

    async loginCustomer(email: string, password: string) {
        const user = await this.findPerEmail.findPerEmail(email);
        if (!user) {
            throw new Error('Usuário não encontrado.');
        }
        if (!bcrypt.compareSync(password, user.password)) {
            throw new Error('Senha errada');
        }
        const token = this.jwtService.generateToken(
            {
                id: user.id,
                email: user.email,
            },
            '1h',
        );
        return token;
    }
}

export { LoginCustomerService };
