import { NotFoundError } from '../../helpers/api-erros';
import { ITaskRepository } from '../../repositories/interfaces/taskRepository';

export class FindTaskByUserIdUseCase {
    constructor(private tasksRepository: ITaskRepository) {}
    async execute(userId: string) {
        const taskExists = await this.tasksRepository.findByUserId(userId);
        if (!taskExists) throw new NotFoundError();
        return taskExists;
    }
}
