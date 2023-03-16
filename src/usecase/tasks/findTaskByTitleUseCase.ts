import { NotFoundError } from '../../helpers/api-erros';
import { IFilter, ITaskRepository } from '../../repositories/interfaces/taskRepository';


export class FindTaskByTitleUseCase {
    constructor(private tasksRepository: ITaskRepository) {}
    async execute(title: string, userId: string) {
        const regex = new RegExp(`${title}`);
        const filter: IFilter = { userId: userId, title: regex };

        const taskExists = await this.tasksRepository.findByTitle(filter);
        if (!taskExists) throw new NotFoundError();
        return taskExists;
    }
}
