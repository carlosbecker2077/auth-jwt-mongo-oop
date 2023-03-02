import { MongoUsersRepository } from '../repositories/implementations/mongoUserRepository';
import { CreateUserUseCase } from './user/createUserUseCase';
import { UpdateUserUseCase } from './user/updateUserUseCase';
import { RemoveUserUseCase } from './user/removeUserUseCase';
import { FindUserMailUseCase } from './user/findUserEmailUseCase';
import { FindUserIdUseCase } from './user/findUserByIdUseCase';

const mongoUserRepository = new MongoUsersRepository();

const createUserUseCase = new CreateUserUseCase(mongoUserRepository);
const updateUserUseCase = new UpdateUserUseCase(mongoUserRepository);
const removeUserUseCase = new RemoveUserUseCase(mongoUserRepository);
const findUserMailUseCase = new FindUserMailUseCase(mongoUserRepository);
const findUserIdUseCase = new FindUserIdUseCase(mongoUserRepository);
