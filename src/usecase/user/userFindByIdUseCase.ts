import { User } from '../../database/schemas/User';

export class UserFindByIdUseCase {
    async execute(id: string) {
        const queriedUser = await User.find({ _id: id });
        return queriedUser;
    }
}
