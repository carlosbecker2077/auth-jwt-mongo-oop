import { Task } from '../../entities/Task/Task';
import { ITaskRequestDTO } from './TaskDTO';
import { ITaskRepository } from '../../repositories/interfaces/taskRepository';
import { NotFoundError } from '../../helpers/api-erros';

export class UpdateTaskUseCase {
    constructor(private tasksRepository: ITaskRepository) {}
    async execute(taskData: ITaskRequestDTO, taskId: string, userId: string) {
        const task = new Task(
            taskData.title,
            taskData.description,
            taskData.done,
            userId,
            taskData.updatedAt
        );

        const userTaskExists = await this.tasksRepository.findById(
            taskId,
            userId
        );

        if (!userTaskExists) throw new NotFoundError();

        task.updatedAt = new Date();
        return await this.tasksRepository.update(task);
    }
}
