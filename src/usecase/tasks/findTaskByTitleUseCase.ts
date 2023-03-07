import { NotFoundError } from '../../helpers/api-erros';
import { ITaskRepository } from '../../repositories/interfaces/taskRepository';

export class FindTaskByTitleUseCase {
    constructor(private tasksRepository: ITaskRepository) {}
    async execute(title: string, userId: string) {
        const taskExists = await this.tasksRepository.findByTitle(
            title,
            userId
        );
        if (!taskExists) throw new NotFoundError();
        return taskExists;
    }
}
