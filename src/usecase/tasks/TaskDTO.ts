export interface ITaskRequestDTO {
    id?: string;
    title: string;
    description: string;
    done: boolean;
    userId: string;
    updatedAt: Date;
}
