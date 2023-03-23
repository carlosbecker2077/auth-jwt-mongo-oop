import { NotFoundError } from '../../helpers/api-erros';
import { ITaskRepository } from '../../repositories/interfaces/taskRepository';

export class RemoveTaskUseCase {
    constructor(private tasksRepository: ITaskRepository) {}
    async execute(userId: string, taskId?: string) {
        if (!taskId) return await this.tasksRepository.remove(userId);

        const taskExists = await this.tasksRepository.findById(taskId, userId);
        if (!taskExists) throw new NotFoundError();

        return await this.tasksRepository.remove(userId, taskId);
    }
}
