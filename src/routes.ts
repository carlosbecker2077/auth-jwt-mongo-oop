import { Router } from 'express';
import {
    createUserController,
    loginController,
    removeUserController,
    updateUserController,
    findUserByIdController,
    createTaskController,
    updateTaskController,
    removeTaskController,
    findTaskByIdController,
    findTaskByTitleTaskController,
    findTaskByUserIdController,
    refreshTokenController,
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
    return updateUserController.handle(req, res);
});

routes.delete('/user', authMiddleware, (req, res) => {
    return removeUserController.handle(req, res);
});

routes.get('/user', authMiddleware, (req, res) => {
    return findUserByIdController.handle(req, res);
});

// task routes

routes.post('/task', authMiddleware, (req, res) => {
    return createTaskController.handle(req, res);
});

routes.put('/task', authMiddleware, (req, res) => {
    return updateTaskController.handle(req, res);
});

routes.delete('/task/:taskId?', authMiddleware, (req, res) => {
    return removeTaskController.handle(req, res);
});

routes.get('/task/id/:taskId', authMiddleware, (req, res) => {
    return findTaskByIdController.handle(req, res);
});

routes.get('/task/title/:title', authMiddleware, (req, res) => {
    return findTaskByTitleTaskController.handle(req, res);
});

routes.get('/task/user/', authMiddleware, (req, res) => {
    return findTaskByUserIdController.handle(req, res);
});

// refresh token
routes.post('/refreshToken', authMiddleware, (req, res) => {
    return refreshTokenController.handle(req, res);
});

export default routes;
