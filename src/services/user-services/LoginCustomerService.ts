import { IJwtService } from '../../interfaces/user-interfaces/IJwtService';
import bcrypt from 'bcrypt';
import { ILoginCustomerService } from '../../interfaces/user-interfaces/ILoginCustomerService';
import { IFindPerUsername } from '../../interfaces/user-interfaces/IFindPerUsername';

class LoginCustomerService implements ILoginCustomerService {
    constructor(
        private readonly findPerUsername: IFindPerUsername,
        private readonly jwtService: IJwtService,
    ) { }

    async loginCustomer(username: string, password: string) {
        const user = await this.findPerUsername.findPerUsername(username);
        if (!user) {
            throw new Error('Usuário não encontrado.');
        }
        if (!bcrypt.compareSync(password, user.password)) {
            throw new Error('Senha errada');
        }
        const token = this.jwtService.generateToken(
            {
                id: user.id,
                username: user.username,
            },
            '24h',
        );
        return token;
    }
}

export { LoginCustomerService };
