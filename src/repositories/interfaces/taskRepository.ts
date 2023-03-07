import { Task } from '../../entities/Task/Task';
import { ITask } from '../mongodb/schemas/Task';

export interface ITaskRepository {
    save(task: Task): Promise<void>;
    update(task: Task): Promise<void>;
    remove(id: string): Promise<void>;
    findById(id: string): Promise<undefined | ITask | null>;
    findByUserId(userId: string): Promise<undefined | ITask | null>;
    findByTitle(title: string): Promise<undefined | ITask | null>;
}
