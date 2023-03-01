import { IUserRepository } from '../../repositories/interfaces/userRepository';

export class UserRemoveUseCase {
    constructor(private usersRepository: IUserRepository) {}
    async execute(id: string) {
        return await this.usersRepository.remove(id);
    }
}
