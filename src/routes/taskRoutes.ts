import { Router } from 'express';
import {
    createTaskController,
    updateTaskController,
    removeTaskController,
    findTaskByIdController,
    findTaskByTitleTaskController,
    findTaskByUserIdController,
} from '../usecase/index';
import { authMiddleware } from '../middlewares/authMiddleware';

const taskRoutes = Router();

taskRoutes.post('/task', authMiddleware, (req, res) => {
    return createTaskController.handle(req, res);
});

taskRoutes.put('/task', authMiddleware, (req, res) => {
    return updateTaskController.handle(req, res);
});

taskRoutes.delete('/task/:taskId?', authMiddleware, (req, res) => {
    return removeTaskController.handle(req, res);
});

taskRoutes.get('/task/id/:taskId', authMiddleware, (req, res) => {
    return findTaskByIdController.handle(req, res);
});

taskRoutes.get('/task/title/:title', authMiddleware, (req, res) => {
    return findTaskByTitleTaskController.handle(req, res);
});

taskRoutes.get('/task/user/', authMiddleware, (req, res) => {
    return findTaskByUserIdController.handle(req, res);
});
export default taskRoutes;
