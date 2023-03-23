import { NotFoundError } from '../../../../src/helpers/api-erros';
import { ITaskRepository } from '../../../../src/repositories/interfaces/taskRepository';
import { ITaskRequestDTO } from '../../../../src/usecase/tasks/TaskDTO';

const tasksArrayMock: ITaskRequestDTO[] = [
    {
        title: 'Pular fogueira',
        description: 'Dia 24 e dia 25!',
        userId: '1',
        done: false,
        updatedAt: new Date(),
    },
    {
        title: 'Comer bolo de aipim',
        description: 'Dia 24 e dia 25!',
        userId: '1',
        done: false,
        updatedAt: new Date(),
    },
    {
        title: 'Dançar quadrilha',
        description: 'Dia 24 e dia 25!',
        userId: '1',
        done: false,
        updatedAt: new Date(),
    },
];

export const taskRepositoryMock: ITaskRepository = {
    save: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
    findById: jest.fn(),
    findByUserId: jest.fn(),
    findByTitle: jest.fn(),
};

export const taskRepositoryMockWithError: ITaskRepository = {
    save: jest.fn(),
    update: jest.fn(),
    remove: jest.fn().mockRejectedValue(new NotFoundError()),
    findById: jest.fn(),
    findByUserId: jest.fn(),
    findByTitle: jest.fn(),
};
