interface ICustomerProps {
    id: number;
    username: string;
    name: string;
    email: string;
    password: string;
    status: boolean;
    created_at: Date | null;
    updated_at: Date | null;
}

export { ICustomerProps };
