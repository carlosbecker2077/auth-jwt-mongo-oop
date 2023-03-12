import { Task } from '../../entities/Task/Task';
import { ITask } from '../mongodb/schemas/Task';

export interface ITaskRepository {
    save(task: Task): Promise<void>;
    update(task: Task, userId: string): Promise<void>;
    remove(userId: string, id?: string): Promise<void>;
    findById(id: string, userId: string): Promise<undefined | ITask | null>;
    findByUserId(userId: string): Promise<undefined | ITask[] | null>;
    findByTitle(
        title: string,
        userId: string
    ): Promise<undefined | ITask[] | null>;
}
