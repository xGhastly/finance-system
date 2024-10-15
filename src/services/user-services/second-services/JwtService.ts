import jwt from 'jsonwebtoken';
import { IPayLoadProps } from '../../../interfaces/user-interfaces/props/IPayLoadProps';
import { IJwtService } from '../../../interfaces/user-interfaces/IJwtService';

class JwtService implements IJwtService {
    generateToken(payload: IPayLoadProps): string {
        return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '12h' });
    }

    decodeToken(token: string) {
        const userData = jwt.decode(token) as IPayLoadProps;
        if (!userData) {
            throw new Error('error');
        }
        return userData;
    }
}

export { JwtService };
