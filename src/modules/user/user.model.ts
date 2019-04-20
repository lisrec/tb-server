import { AggregateRoot } from '@nestjs/cqrs';
import { UserCreatedEvt } from './events/user-created.evt';

export class UserModel extends AggregateRoot {
	public id: string;

	constructor(
		public readonly login: string,
		public readonly hashPass: string,
		public readonly displayName: string,
		public readonly avatarUrl: string,
		public readonly saldo: number,
	) {
		super();
	}

	static register(
		login: string,
		hashPass: string,
		displayName: string,
	): UserModel {
		return new UserModel(login, hashPass, displayName, null, 0);
	}

	public create(user: UserModel): void {
		this.apply(new UserCreatedEvt(user));
	}
}
