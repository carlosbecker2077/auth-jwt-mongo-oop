import { MongoUsersRepository } from '../repositories/implementations/mongoUserRepository';
import { CreateUserUseCase } from './user/createUserUseCase';
import { UpdateUserUseCase } from './user/updateUserUseCase';
import { RemoveUserUseCase } from './user/removeUserUseCase';
import { FindUserByIdUseCase } from './user/findUserByIdUseCase';
import { CreateUserController } from '../adapters/controllers/userController/createUserController';
import { LoginController } from '../adapters/controllers/authController/loginController';
import { LoginUserUsecase } from './auth/loginUserUseCase';
import { UpdateUserController } from '../adapters/controllers/userController/updateUserController';
import { RemoveUserController } from '../adapters/controllers/userController/removeUserController';
import { FindUserByIdController } from '../adapters/controllers/userController/findUserIdController';
import { CreateTaskController } from '../adapters/controllers/taskController/createTaskController';
import { CreateTaskUseCase } from './tasks/createTaskUseCase';
import { MongoTasksRepository } from '../repositories/implementations/mongoTaskRepository';
import { UpdateTaskUseCase } from './tasks/updateTaskUseCase';
import { RemoveTaskUseCase } from './tasks/removeTaskUseCase';
import { FindTaskByIdUseCase } from './tasks/findTaskByIdUseCase';
import { FindTaskByTitleUseCase } from './tasks/findTaskByTitleUseCase';
import { FindTaskByUserIdUseCase } from './tasks/findTaskByUserIdUseCase';
import { UpdateTaskController } from '../adapters/controllers/taskController/updateTaskController';
import { RemoveTaskController } from '../adapters/controllers/taskController/removeTaskController';
import { FindTaskByIdController } from '../adapters/controllers/taskController/findTaskByIdController';
import { FindTaskByTitleController } from '../adapters/controllers/taskController/findTaskByTitleController';
import { FindTaskByUserIdController } from '../adapters/controllers/taskController/findTaskByUserIdController';
import { RefreshTokenController } from '../adapters/controllers/authController/refreshTokenController';
import { RefreshTokenUseCase } from './auth/refreshTokenUseCase';

const mongoUserRepository = new MongoUsersRepository();
const mongoTaskRepository = new MongoTasksRepository();

// user usecases
const createUserUseCase = new CreateUserUseCase(mongoUserRepository);
const updateUserUseCase = new UpdateUserUseCase(mongoUserRepository);
const removeUserUseCase = new RemoveUserUseCase(
    mongoUserRepository,
    mongoTaskRepository
);
const findUserByIdUseCase = new FindUserByIdUseCase(mongoUserRepository);

// auth usecases
const loginUserUseCase = new LoginUserUsecase(mongoUserRepository);

// task usecases
const createTaskUseCase = new CreateTaskUseCase(mongoTaskRepository);
const updateTaskUseCase = new UpdateTaskUseCase(mongoTaskRepository);
const removeTaskUseCase = new RemoveTaskUseCase(mongoTaskRepository);
const findTaskByIdUseCase = new FindTaskByIdUseCase(mongoTaskRepository);
const findTaskByTitleUseCase = new FindTaskByTitleUseCase(mongoTaskRepository);
const findTaskByUserIdUseCase = new FindTaskByUserIdUseCase(
    mongoTaskRepository
);

// user controllers
const createUserController = new CreateUserController(createUserUseCase);
const loginController = new LoginController(loginUserUseCase);
const updateUserController = new UpdateUserController(updateUserUseCase);
const removeUserController = new RemoveUserController(removeUserUseCase);
const findUserByIdController = new FindUserByIdController(findUserByIdUseCase);

// refreshToken
const refreshTokenController = new RefreshTokenController(
    new RefreshTokenUseCase()
);

// task controllers
const createTaskController = new CreateTaskController(createTaskUseCase);
const updateTaskController = new UpdateTaskController(updateTaskUseCase);
const removeTaskController = new RemoveTaskController(removeTaskUseCase);
const findTaskByIdController = new FindTaskByIdController(findTaskByIdUseCase);
const findTaskByTitleTaskController = new FindTaskByTitleController(
    findTaskByTitleUseCase
);
const findTaskByUserIdController = new FindTaskByUserIdController(
    findTaskByUserIdUseCase
);

export {
    createUserController,
    loginController,
    updateUserController,
    removeUserController,
    findUserByIdUseCase,
    findUserByIdController,
    createTaskController,
    updateTaskController,
    removeTaskController,
    findTaskByIdController,
    findTaskByTitleTaskController,
    findTaskByUserIdController,
    refreshTokenController,
};
