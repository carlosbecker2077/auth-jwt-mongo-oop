import { Router } from 'express';
// import { RefreshTokenController } from './controllers/RefreshTokenController';
// import { TaskController } from './controllers/TaskController';
import { createUserController } from './usecase/index';
import { authMiddleware } from './middlewares/authMiddleware';

const routes = Router();

routes.post('/user', (req, res) => {
    return createUserController.handle(req, res);
});
// routes.post('/login', new UserController().login);
// routes.post('/refreshToken', new RefreshTokenController().create);

// todas as rotas abaixo são protegidas por token

// routes.get('/user', authMiddleware, new UserController().getProfile);
// routes.put('/user', authMiddleware, new UserController().update);
// routes.delete('/user', authMiddleware, new UserController().remove);
// routes.post('/task', authMiddleware, new TaskController().create);
// routes.get('/task', authMiddleware, new TaskController().getAllByUser);
// routes.get('/task/filter/:title/:done',authMiddleware, new TaskController().getFilter);
// routes.get('/task/:taskId', authMiddleware, new TaskController().getById);
// routes.put('/task/:taskId', authMiddleware, new TaskController().update);
// routes.delete('/task/:taskId', authMiddleware, new TaskController().remove);

export default routes;
