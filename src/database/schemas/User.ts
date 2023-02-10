import { Schema, model } from 'mongoose';
export interface IUser {
    id: string;
    name: string;
    email: string;
    password?: string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: {
        type: Date,
        required: true,
        default: () => Date.now(),
        immutable: true,
    },
    updatedAt: { type: Date, required: false, default: () => Date.now() },
});

export const User = model<IUser>('User', userSchema);
