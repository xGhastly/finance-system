interface IHashPasswordService {
    hashPassword(password: string, saltRounds: number): Promise<string>;
}

export { IHashPasswordService };
