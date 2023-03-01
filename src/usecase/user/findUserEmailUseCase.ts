import { NotFoundError } from '../../helpers/api-erros';
import { IUserRepository } from '../../repositories/interfaces/userRepository';

export class UserFindMailUseCase {
    constructor(private usersRepository: IUserRepository) {}
    async execute(email: string) {
        const userExists = await this.usersRepository.findByEmail(email);
        if (!userExists) throw new NotFoundError();
        return userExists;
    }
}
