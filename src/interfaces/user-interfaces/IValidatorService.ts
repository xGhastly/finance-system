interface IValidatorService<T> {
    validate(data: T): void;
}

export { IValidatorService };
