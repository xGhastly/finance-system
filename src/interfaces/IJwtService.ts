import { IPayLoadProps } from './Props/IPayLoadProps';

interface IJwtService {
    generateToken(payload: IPayLoadProps, expiresIn: string | number): string;
}

export { IJwtService };
