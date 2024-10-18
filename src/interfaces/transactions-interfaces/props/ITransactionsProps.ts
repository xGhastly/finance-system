interface ITransactionsProps {
    id: number;
    accountId: number;
    type: 'ENTRADA' | 'CREDITO' | 'DEBITO' | 'PIX';
    amount: number;
    description: string | null;
    createdAt: Date;
}

export { ITransactionsProps };
