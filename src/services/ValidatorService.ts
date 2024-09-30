import Joi from 'joi';
import { IValidatorService } from '../interfaces/IValidatorService';
import { ICreateCustomerProps } from '../interfaces/ICreateCustomerProps';

class ValidatorService implements IValidatorService<ICreateCustomerProps> {
    validate(data: ICreateCustomerProps): void {
        const schema = Joi.object({
            name: Joi.string().max(50).required().messages({
                'string.max': 'O nome deve ter no máximo 50 caracteres.',
                'any.required': 'O nome é obrigatório.',
            }),
            email: Joi.string().email().max(50).required().messages({
                'string.email': 'O email deve ser válido.',
                'string.max': 'O email deve ter no máximo 50 caracteres.',
                'any.required': 'O email é obrigatório.',
            }),
            password: Joi.string().min(8).max(20).required().messages({
                'string.min': 'A senha deve ter pelo menos 8 caracteres.',
                'string.max': 'A senha deve ter no máximo 20 caracteres.',
                'any.required': 'A senha é obrigatória.',
            }),
        });

        const { error } = schema.validate(data);
        if (error) {
            throw new Error(error.details[0].message);
        }
    }
}

export { ValidatorService };
