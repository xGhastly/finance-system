import { IPayLoadProps } from './props/IPayLoadProps';

interface IJwtService {
    generateToken(payload: IPayLoadProps, expiresIn: string | number): string;
    decodeToken(token: string): IPayLoadProps;
}

export { IJwtService };
