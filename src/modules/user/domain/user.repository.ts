import { Injectable } from '@nestjs/common';
import { UserModel } from './user.model';

@Injectable()
export class UserRepository {
	users: UserModel[] = [];

	async isDuplicated(login: string): Promise<boolean> {
		return this.users.some(usr => usr.login === login);
	}

	async findOneById(id: string): Promise<UserModel> {
		return this.users.find(usr => usr.id === id) || null;
	}

	async findAll(): Promise<UserModel[]> {
		return this.users;
	}

	async store(user: UserModel): Promise<UserModel> {
		this.users.push(user);
		return user;
	}
}
