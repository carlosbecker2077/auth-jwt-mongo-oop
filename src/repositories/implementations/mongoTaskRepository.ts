import { ITaskRepository } from '../interfaces/taskRepository';
import { Task } from '../../entities/Task/Task';
import { ITask, TaskSchema } from '../mongodb/schemas/Task';

export class MongoTasksRepository implements ITaskRepository {
    async save(task: Task): Promise<void> {
        const taskModel = new TaskSchema(task);
        await taskModel.save();
    }

    async update(task: Task, userId: string): Promise<void> {
        const result = await TaskSchema.findOneAndUpdate(
            { _id: task.id as string, userId },
            task
        );
        if (!result) throw new Error('task not found');
    }

    async remove(userId: string, id?: string): Promise<void> {
        if (!id) {
            const result = TaskSchema.findOne({ userId });
            if (!result) throw new Error('tasks not found');
            await TaskSchema.remove({ userId });
        }

        const result = TaskSchema.findOne({ userId, _id: id });
        if (!result) throw new Error('task not found');
        await TaskSchema.remove({ userId, _id: id });
    }

    async findById(
        id: string,
        userId: string
    ): Promise<undefined | ITask | null> {
        const task = await TaskSchema.findOne({ _id: id, userId: userId });
        return task;
    }

    async findByUserId(userId: string): Promise<undefined | ITask[] | null> {
        const task = await TaskSchema.find({ userId });
        return task;
    }

    async findByTitle({ title, userId }): Promise<undefined | ITask[] | null> {
        const task = await TaskSchema.find({ title, userId });
        return task;
    }
}
