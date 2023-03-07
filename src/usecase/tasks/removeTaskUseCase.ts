import { UnauthorizedError } from '../../helpers/api-erros';
import { ITaskRepository } from '../../repositories/interfaces/taskRepository';

export class RemoveTaskUseCase {
    constructor(private tasksRepository: ITaskRepository) {}
    async execute(taskId: string, userId: string) {
        const taskExists = await this.tasksRepository.findById(taskId, userId);
        if (!taskExists) throw new UnauthorizedError();

        return await this.tasksRepository.remove(taskId);
    }
}
