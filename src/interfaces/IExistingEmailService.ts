interface IExistingEmailService {
    existingEmail(email: string): Promise<void>;
}

export { IExistingEmailService };
