interface ILoginCustomerService {
    loginCustomer(email: string, password: string): Promise<string>;
}

export { ILoginCustomerService };
