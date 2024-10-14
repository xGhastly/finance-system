interface ILoginCustomerService {
    loginCustomer(username: string, password: string): Promise<string>;
}

export { ILoginCustomerService };
