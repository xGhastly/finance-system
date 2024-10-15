import { IAccountProps } from './props/IAccountProps';

interface IUpdateBalance {
    update(
        customerId: number,
        amount: number,
        description: string,
        action: 'ENTRADA' | 'CREDITO' | 'DEBITO' | 'PIX',
    ): Promise<IAccountProps>;
}

export { IUpdateBalance };
