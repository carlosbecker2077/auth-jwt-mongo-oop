import { User } from '../../database/schemas/User';
import { UserFindMailUseCase } from './findUserEmailUseCase';
import { HashPassword } from './hashPasswordUseCase';

import {
    EmailAlreadyExistsError,
    InvalidEmailOrPasswordError,
} from '../../helpers/api-erros';

export interface IUserCreate {
    name: string;
    email: string;
    password: string;
}

export class CreateUserUseCase {
    async execute({ name, email, password }: IUserCreate) {
        this.checkEmailPassword(email, password);

        const findMail = new UserFindMailUseCase();
        const userExists = await findMail.execute(email);
        if (userExists) throw new EmailAlreadyExistsError();

        const passwordHasher = new HashPassword();
        password = await passwordHasher.execute(password, 10);
        const savedUser = await this.saveUser({ name, email, password });
        delete savedUser.password;

        return savedUser;
    }

    checkEmailPassword(email: string, password: string) {
        if (!email || !password) throw new InvalidEmailOrPasswordError();
    }

    async saveUser({ name, email, password }: IUserCreate) {
        return await User.create({ name, email, password });
    }
}
