import { IUser } from '../../database/schemas/User';
import { UserFindMailUseCase } from './findUserEmailUseCase';
import { HashPassword } from './hashPasswordUseCase';
import { UserFindByIdUseCase } from './userFindByIdUseCase';

import {
    EmailAlreadyExistsError,
    InvalidEmailOrPasswordError,
    UnauthorizedError,
} from '../../helpers/api-erros';

export class UserUpdateUseCase {
    async execute(id: string, name: string, email: string, password: string) {
        this.checkEmailPassword(email, password);

        const findMail = new UserFindMailUseCase();
        const userExists = await findMail.execute(email);
        if (userExists) throw new EmailAlreadyExistsError();

        const findId = new UserFindByIdUseCase();
        const queriedUser = await findId.execute(id);
        if (queriedUser.length > 0) throw new UnauthorizedError();

        const passwordHasher = new HashPassword();
        password = await passwordHasher.execute(password, 10);
        await queriedUser[0].save();
        delete queriedUser[0].password;

        return queriedUser;
    }

    checkEmailPassword(email: string, password: string) {
        if (!email || !password) throw new InvalidEmailOrPasswordError();
    }

    async saveUser(user: IUser) {
        await user[0].save(user.name, user.email, user.password);
    }
}
