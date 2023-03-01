import { IUser } from '../database/schemas/User';
// sobrescrevendo o request para adicionar o user do models
// criando um type novo
declare global {
	namespace Express {
		export interface Request {
			user: Partial<IUser>;
		}
	}
}
