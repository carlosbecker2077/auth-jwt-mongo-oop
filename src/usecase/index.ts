import { MongoUsersRepository } from '../repositories/implementations/mongoUserRepository';
import { CreateUserUseCase } from './user/createUserUseCase';
import { UpdateUserUseCase } from './user/updateUserUseCase';
import { RemoveUserUseCase } from './user/removeUserUseCase';
import { FindUserMailUseCase } from './user/findUserEmailUseCase';
import { FindUserIdUseCase } from './user/findUserByIdUseCase';
import { CreateUserController } from '../adapters/controllers/userController/createUserController';
import { LoginController } from '../adapters/controllers/authController/loginController';
import { LoginUserUsecase } from './auth/loginUserUseCase';
import { UpdateUserController } from '../adapters/controllers/userController/updateUserController';
import { RemoveUserController } from '../adapters/controllers/userController/removeUserController';

const mongoUserRepository = new MongoUsersRepository();

// user usecases
const createUserUseCase = new CreateUserUseCase(mongoUserRepository);
const updateUserUseCase = new UpdateUserUseCase(mongoUserRepository);
const removeUserUseCase = new RemoveUserUseCase(mongoUserRepository);
const findUserMailUseCase = new FindUserMailUseCase(mongoUserRepository);
const findUserIdUseCase = new FindUserIdUseCase(mongoUserRepository);

// auth usecases
const loginUserUseCase = new LoginUserUsecase(mongoUserRepository);

// user controllers
const createUserController = new CreateUserController(createUserUseCase);
const loginController = new LoginController(loginUserUseCase);
const updateController = new UpdateUserController(updateUserUseCase);
const removeController = new RemoveUserController(removeUserUseCase);

export {
    createUserController,
    loginController,
    updateController,
    removeController,
    findUserIdUseCase,
};
