import { PassThrough } from 'stream';
import { IUserRepository } from '../../../../src/repositories/interfaces/userRepository';
import { IUserRequestDTO } from '../../../../src/usecase/user/UserDTO';

export const userMock: IUserRequestDTO = {
    name: 'Placeholder name',
    email: 'placeholder@email.com',
    password: 'password321',
    updatedAt: new Date(),
};
