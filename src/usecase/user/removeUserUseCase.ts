import { NotFoundError } from '../../helpers/api-erros';
import { ITaskRepository } from '../../repositories/interfaces/taskRepository';
import { IUserRepository } from '../../repositories/interfaces/userRepository';

export class RemoveUserUseCase {
    constructor(
        private usersRepository: IUserRepository,
        private tasksRepository: ITaskRepository
    ) {}
    async execute(userId: string) {
        const userExists = await this.usersRepository.findById(userId);
        if (!userExists) throw new NotFoundError();

        await this.tasksRepository.remove(userId);
        return await this.usersRepository.remove(userId);
    }
}
