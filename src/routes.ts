import { Router } from 'express';
// import { RefreshTokenController } from './controllers/RefreshTokenController';
// import { TaskController } from './controllers/TaskController';
import {
    createUserController,
    loginController,
    removeController,
    updateController,
} from './usecase/index';
import { authMiddleware } from './middlewares/authMiddleware';

const routes = Router();

routes.post('/user', (req, res) => {
    return createUserController.handle(req, res);
});

routes.post('/login', (req, res) => {
    return loginController.handle(req, res);
});

// todas as rotas abaixo são protegidas por token

routes.put('/user', authMiddleware, (req, res) => {
    return updateController.handle(req, res);
});

routes.delete('/user', authMiddleware, (req, res) => {
    return removeController.handle(req, res);
});

// routes.post('/task', authMiddleware, new TaskController().create);
// routes.get('/task', authMiddleware, new TaskController().getAllByUser);
// routes.get('/task/filter/:title/:done',authMiddleware, new TaskController().getFilter);
// routes.get('/task/:taskId', authMiddleware, new TaskController().getById);
// routes.put('/task/:taskId', authMiddleware, new TaskController().update);
// routes.delete('/task/:taskId', authMiddleware, new TaskController().remove);

export default routes;
