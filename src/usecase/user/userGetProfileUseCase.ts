import { User } from '../../database/schemas/User';

export class UserGetProfileUseCase {
    async execute(id: string) {
        const userProfile = await User.find({ _id: id });
        delete userProfile[0].password;
        return userProfile;
    }
}
