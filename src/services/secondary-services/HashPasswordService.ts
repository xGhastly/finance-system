import bcrypt from 'bcrypt';
import { IHashPasswordService } from '../../interfaces/IHashPasswordService';

class HashPasswordService implements IHashPasswordService {
    async hashPassword(password: string, saltRounds = 10) {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    }
}

export { HashPasswordService };
