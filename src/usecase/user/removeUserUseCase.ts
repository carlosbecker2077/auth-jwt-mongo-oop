import { UnauthorizedError } from '../../helpers/api-erros';
import { IUserRepository } from '../../repositories/interfaces/userRepository';

export class RemoveUserUseCase {
    constructor(private usersRepository: IUserRepository) {}
    async execute(userId: string) {
        const userExists = await this.usersRepository.findById(userId);
        if (!userExists) throw new UnauthorizedError();

        return await this.usersRepository.remove(userId);
    }
}
