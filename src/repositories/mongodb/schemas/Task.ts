import { Schema, model } from 'mongoose';

export interface ITask {
    id: string;
    userId: string;
    title: string;
    description: string;
    done: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const taskSchema = new Schema<ITask>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    userId: { type: String, required: true },
    createdAt: {
        type: Date,
        required: true,
        default: () => Date.now(),
        immutable: true,
    },
    updatedAt: { type: Date, required: false, default: () => Date.now() },
});

export const Task = model<ITask>('Task', taskSchema);
