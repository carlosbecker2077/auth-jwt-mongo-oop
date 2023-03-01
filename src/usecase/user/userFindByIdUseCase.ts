import { NotFoundError } from '../../helpers/api-erros';
import { IUserRepository } from '../../repositories/interfaces/userRepository';

export class UserFindMailUseCase {
    constructor(private usersRepository: IUserRepository) {}
    async execute(id: string) {
        const userExists = await this.usersRepository.findById(id);
        if (!userExists) throw new NotFoundError();
        return userExists;
    }
}
