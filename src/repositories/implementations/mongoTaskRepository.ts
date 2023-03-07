import { ITaskRepository } from '../interfaces/taskRepository';
import { Task } from '../../entities/Task/Task';
import { ITask, TaskSchema } from '../mongodb/schemas/Task';

export class MongoTasksRepository implements ITaskRepository {
    async save(task: Task): Promise<void> {
        const taskModel = new TaskSchema(task);
        await taskModel.save();
    }

    async update(task: Task): Promise<void> {
        const result = await TaskSchema.findOneAndUpdate({ id: task.id }, task);
        if (!result) throw new Error('task not found');
    }

    async remove(id: string): Promise<void> {
        const result = await TaskSchema.findOneAndDelete({ id });
        if (!result) throw new Error('task not found');
    }

    async findById(
        id: string,
        userId: string
    ): Promise<undefined | ITask | null> {
        const task = await TaskSchema.findOne({ id, userId });
        return task;
    }

    async findByUserId(userId: string): Promise<undefined | ITask[] | null> {
        const task = await TaskSchema.find({ userId });
        return task;
    }

    async findByTitle(title: string): Promise<undefined | ITask[] | null> {
        const task = await TaskSchema.find({ title });
        return task;
    }
}
