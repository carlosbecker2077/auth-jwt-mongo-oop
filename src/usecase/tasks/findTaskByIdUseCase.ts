import { NotFoundError } from '../../helpers/api-erros';
import { ITaskRepository } from '../../repositories/interfaces/taskRepository';

export class FindTaskByIdUseCase {
    constructor(private tasksRepository: ITaskRepository) {}
    async execute(id: string, userId: string) {
        const taskExists = await this.tasksRepository.findById(id, userId);
        if (!taskExists) throw new NotFoundError();
        return taskExists;
    }
}
