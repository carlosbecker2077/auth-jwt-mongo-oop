import { NotFoundError } from '../../../../src/helpers/api-erros';
import { IUserRepository } from '../../../../src/repositories/interfaces/userRepository';
import { IUserRequestDTO } from '../../../../src/usecase/user/UserDTO';

export const userMock: IUserRequestDTO = {
    name: 'Placeholder name',
    email: 'placeholder@email.com',
    password: 'password321',
};

export const userMockWithId: IUserRequestDTO = {
    id: '12345',
    name: 'Placeholder name',
    email: 'placeholder@email.com',
    password: 'password321',
};

export const userMockInvalidEmail: IUserRequestDTO = {
    name: 'Placeholder name',
    email: 'placeholderemail.com',
    password: 'password321',
};

export const userMockInvalidPassword: IUserRequestDTO = {
    name: 'Placeholder name',
    email: 'placeholder@email.com',
    password: 'pas',
};

export const userRepositoryMock: IUserRepository = {
    save: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
    findById: jest.fn().mockReturnValue(userMock),
    findByEmail: jest.fn(),
};

export const userRepositoryMockFindByEmail: IUserRepository = {
    save: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
    findById: jest.fn().mockReturnValue(userMockWithId),
    findByEmail: jest.fn().mockReturnValue(userMockWithId),
};

export const userRepositoryMockUserId: IUserRepository = {
    save: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
    findById: jest.fn(),
    findByEmail: jest.fn(),
};

export const userRepositoryMockWithError: IUserRepository = {
    save: jest.fn().mockRejectedValue(new Error('Error saving task data')),
    findById: jest.fn().mockRejectedValue(new NotFoundError()),
    findByEmail: jest.fn().mockRejectedValue(new NotFoundError()),
    update: jest.fn().mockRejectedValue(new NotFoundError()),
    remove: jest.fn().mockRejectedValue(new NotFoundError()),
};
