import { NotFoundError } from '../../../../src/helpers/api-erros';
import { ITaskRepository } from '../../../../src/repositories/interfaces/taskRepository';
import { ITaskRequestDTO } from '../../../../src/usecase/tasks/TaskDTO';

export const tasksArrayMock: ITaskRequestDTO[] = [
    {
        title: 'Arrumar a casa',
        description: 'Começar pelo quarto',
        userId: '1',
        done: false,
        updatedAt: new Date(),
    },
    {
        title: 'Estudar Testes',
        description: 'Começar a estudar por jest',
        userId: '1',
        done: false,
        updatedAt: new Date(),
    },
    {
        title: 'Jogar o lixo na rua',
        description: 'pegar o lixo da cozinha primeiro',
        userId: '1',
        done: false,
        updatedAt: new Date(),
    },
];

export const taskRepositoryMock: ITaskRepository = {
    save: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
    findById: jest.fn().mockReturnValue(tasksArrayMock[0]),
    findByUserId: jest.fn().mockReturnValue(tasksArrayMock),
    findByTitle: jest.fn().mockReturnValue(tasksArrayMock),
};

export const taskRepositoryMockWithError: ITaskRepository = {
    save: jest.fn(),
    update: jest.fn().mockRejectedValue(new NotFoundError()),
    remove: jest.fn().mockRejectedValue(new NotFoundError()),
    findById: jest.fn().mockRejectedValue(new NotFoundError()),
    findByUserId: jest.fn().mockRejectedValue(new NotFoundError()),
    findByTitle: jest.fn().mockRejectedValue(new NotFoundError()),
};
