import { Router } from 'express';
import {
    createUserController,
    loginController,
    removeUserController,
    updateUserController,
    findUserByIdController,
    refreshTokenController,
} from '../usecase/index';
import { authMiddleware } from '../middlewares/authMiddleware';

const userRoutes = Router();

userRoutes.post('/user', (req, res) => {
    return createUserController.handle(req, res);
});

userRoutes.post('/login', (req, res) => {
    return loginController.handle(req, res);
});

userRoutes.post('/refreshToken', (req, res) => {
    return refreshTokenController.handle(req, res);
});

// todas as rotas abaixo são protegidas por token

userRoutes.put('/user', authMiddleware, (req, res) => {
    return updateUserController.handle(req, res);
});

userRoutes.delete('/user', authMiddleware, (req, res) => {
    return removeUserController.handle(req, res);
});

userRoutes.get('/user', authMiddleware, (req, res) => {
    return findUserByIdController.handle(req, res);
});

export default userRoutes;
