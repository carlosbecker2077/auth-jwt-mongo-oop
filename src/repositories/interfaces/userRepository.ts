import { User } from '../../entities/User/User';
import { IUser } from '../mongodb/schemas/User';

export interface IUserRepository {
    save(user: User): Promise<void>;
    findByEmail(email: string): Promise<undefined | IUser>;
    findById(id: string): Promise<undefined | IUser>;
    update(user: User): Promise<void>;
    remove(id: string): Promise<void>;
}
