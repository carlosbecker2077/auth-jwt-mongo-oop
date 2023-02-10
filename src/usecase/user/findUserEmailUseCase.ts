import { User } from '../../database/schemas/User';

export class UserFindMailUseCase {
    async execute(email: string) {
        const userExists = await User.findOne({ email });
        return userExists;
    }
}
