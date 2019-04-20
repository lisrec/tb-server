import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserController } from 'src/modules/user/user.controller';
import { UserService } from 'src/modules/user/user.service';
import { CreateUserExecute } from './commands/create-user.execute';
import { UserRepository } from './domain/user.repository';
import { UserCreatedHandler } from './events/user-created.handler';
import { GetUsersHandler } from './queries/get-users.handler';

const commandHandlers = [CreateUserExecute];
const queriesHandlers = [GetUsersHandler];
const eventsHandlers = [UserCreatedHandler];

@Module({
	imports: [CqrsModule],
	controllers: [UserController],
	providers: [
		UserService,
		UserRepository,
		...commandHandlers,
		...queriesHandlers,
		...eventsHandlers,
	],
})
export class UserModule {}
