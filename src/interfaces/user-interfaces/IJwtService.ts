import { IPayLoadProps } from './props/IPayLoadProps';

interface IJwtService {
    generateToken(payload: IPayLoadProps, expiresIn: string | number): string;
}

export { IJwtService };
