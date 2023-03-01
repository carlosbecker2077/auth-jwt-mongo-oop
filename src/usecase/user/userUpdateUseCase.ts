import { User } from '../../entities/User/User';
import { EmailAlreadyExistsError } from '../../helpers/api-erros';
import { IUserRequestDTO } from './createUserDTO';
import { IUserRepository } from '../../repositories/interfaces/userRepository';
import { UserPassword } from '../../entities/User/password';

export class UserUpdateUseCase {
    constructor(private usersRepository: IUserRepository) {}
    async execute(userData: IUserRequestDTO) {
        const user = new User(userData.name, userData.email, userData.password);

        const userAlreadyExists = await this.usersRepository.findByEmail(
            user.email
        );
        if (userAlreadyExists) throw new EmailAlreadyExistsError();
        user.password = await UserPassword.encryptPassword(user.password);
        return await this.usersRepository.update(user);
    }
}
