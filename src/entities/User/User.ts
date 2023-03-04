import { uuid } from 'uuidv4';
import { UserValidation } from './validations';

export class User {
    public readonly id: string;

    public name: string;
    public email: string;
    public password: string;
    public updatedAt: Date;

    constructor(
        name: string,
        email: string,
        password: string,
        id?: string,
        updatedAt?: Date
    ) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = !id ? uuid() : id;
        this.updatedAt = updatedAt as Date;

        if (!UserValidation.validationEmail(email)) {
            throw new Error(`Invalid e-mail: '${email}'`);
        }
        if (!UserValidation.validationPassword(password)) {
            throw new Error(
                'Invalid password - Must contain 6 characters or more'
            );
        }
    }
}
