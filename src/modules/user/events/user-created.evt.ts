import { UserModel } from '../user.model';

export class UserCreatedEvt {
	constructor(public readonly user: UserModel) {}
}
