import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserCreatedEvt } from './user-created.evt';
import { UserRepository } from '../domain/user.repository';

@EventsHandler(UserCreatedEvt)
export class UserCreatedHandler implements IEventHandler<UserCreatedEvt> {
	constructor(private readonly repository: UserRepository) {}

	handle(event: UserCreatedEvt) {
		console.log(`New event comes ${JSON.stringify(event)}`);
	}
}
