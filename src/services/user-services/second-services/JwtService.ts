import jwt from 'jsonwebtoken';
import { IPayLoadProps } from '../../../interfaces/user-interfaces/props/IPayLoadProps';

class JwtService {
    generateToken(payload: IPayLoadProps): string {
        return jwt.sign(payload, 'secretKey', { expiresIn: '1h' });
    }
}

export { JwtService };
