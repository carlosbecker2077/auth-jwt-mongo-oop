import { MongoUsersRepository } from '../repositories/implementations/mongoUserRepository';
import { CreateUserUseCase } from './user/createUserUseCase';
import { UpdateUserUseCase } from './user/updateUserUseCase';
import { RemoveUserUseCase } from './user/removeUserUseCase';
import { FindUserMailUseCase } from './user/findUserEmailUseCase';
import { FindUserIdUseCase } from './user/findUserByIdUseCase';
import { CreateUserController } from '../adapters/controllers/userController/createUserController';

const mongoUserRepository = new MongoUsersRepository();

// user usecases
const createUserUseCase = new CreateUserUseCase(mongoUserRepository);
const updateUserUseCase = new UpdateUserUseCase(mongoUserRepository);
const removeUserUseCase = new RemoveUserUseCase(mongoUserRepository);
const findUserMailUseCase = new FindUserMailUseCase(mongoUserRepository);
const findUserIdUseCase = new FindUserIdUseCase(mongoUserRepository);

// user controllers
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
