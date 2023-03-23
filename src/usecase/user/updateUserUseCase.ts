import { User } from '../../entities/User/User';
import {
    EmailAlreadyExistsError,
    NotFoundError,
} from '../../helpers/api-erros';
import { IUserRequestDTO } from './UserDTO';
import { IUserRepository } from '../../repositories/interfaces/userRepository';
import { UserPassword } from '../../entities/User/password';

export class UpdateUserUseCase {
    constructor(private usersRepository: IUserRepository) {}
    async execute(userData: IUserRequestDTO, userId: string) {
        const user = new User(
            userData.name,
            userData.email,
            userData.password,
            userId,
            userData.updatedAt
        );

        const emailAlreadyUsed = await this.usersRepository.findByEmail(
            user.email
        );
        if (emailAlreadyUsed) {
            if (emailAlreadyUsed.id !== userId) {
                throw new EmailAlreadyExistsError();
            }
        }

        const userExists = await this.usersRepository.findById(userId);
        if (!userExists) throw new NotFoundError();

        user.password = await UserPassword.encryptPassword(user.password);
        user.updatedAt = new Date();
        return await this.usersRepository.update(user);
    }
}
