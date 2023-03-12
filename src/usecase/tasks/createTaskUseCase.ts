import { Task } from '../../entities/Task/Task';
import { ITaskRepository } from '../../repositories/interfaces/taskRepository';
import { ITaskRequestDTO } from './TaskDTO';

export class CreateTaskUseCase {
    constructor(private tasksRepository: ITaskRepository) {}

    async execute(taskData: ITaskRequestDTO, userId: string) {
        const task = new Task(
            taskData.title,
            taskData.description,
            taskData.done,
            userId,
            new Date(),
            taskData.id
        );

        return await this.tasksRepository.save(task);
    }
}
