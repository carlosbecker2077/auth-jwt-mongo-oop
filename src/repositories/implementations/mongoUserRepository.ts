import { IUserRepository } from '../interfaces/userRepository';
import { User } from '../../entities/User/User';
import { IUser, UserSchema } from '../mongodb/schemas/User';

export class MongoUsersRepository implements IUserRepository {
    async save(user: User): Promise<void> {
        const userModel = new UserSchema(user);
        await userModel.save();
    }

    async findByEmail(email: string): Promise<undefined | IUser> {
        const user = await UserSchema.findOne({ email });
        if (!user) throw new Error('User not found');
        return user;
    }

    async findById(id: string): Promise<undefined | IUser> {
        const user = await UserSchema.findOne({ id });
        if (!user) throw new Error('User not found');
        return user;
    }

    async update(user: User): Promise<void> {
        const result = await UserSchema.findOneAndUpdate({ id: user.id }, user);
        if (!result) throw new Error('User not found');
    }

    async remove(id: string): Promise<void> {
        const result = await UserSchema.remove(id);
        if (!result) throw new Error('User not found');
    }
}
