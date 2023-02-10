import { Schema, model } from 'mongoose';

export interface IRefreshToken {
    id: string;
    userId: string;
    expiresIn: number;
}

const refreshTokenSchema = new Schema<IRefreshToken>({
    expiresIn: { type: Number, required: true },
    userId: { type: String, required: true },
});

export const RefreshToken = model<IRefreshToken>(
    'RefreshToken',
    refreshTokenSchema
);
