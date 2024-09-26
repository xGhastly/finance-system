interface Customer {
    id: string;
    name: string;
    email: string;
    password: string;
    status: boolean;
    created_at?: Date;
    updated_at?: Date;
}

export { Customer };
