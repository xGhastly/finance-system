import jwt from 'jsonwebtoken';
import { IPayLoadProps } from '../../interfaces/Props/IPayLoadProps';

class JwtService {
    generateToken(payload: IPayLoadProps): string {
        return jwt.sign(payload, 'secretKey', { expiresIn: '1h' });
    }
}

export { JwtService };
