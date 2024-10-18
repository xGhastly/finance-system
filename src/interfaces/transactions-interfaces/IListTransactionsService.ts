import { ITransactionsProps } from './props/ITransactionsProps';

interface IListTransactionsService {
    listTransactions(): Promise<ITransactionsProps[]>;
    listFilterTransactions(cusomerUser: string): Promise<ITransactionsProps[]>;
}

export { IListTransactionsService };
