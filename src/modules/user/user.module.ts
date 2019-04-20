import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserController } from 'src/api/controllers/user.controller';
import { UserService } from 'src/api/services/user.service';
import { CreateUserExecute } from './cmd-handlers/create-user.execute';
import { UserRepository } from './user.repository';
import { UserCreatedHandler } from './events/user-created.handler';
import { GetUsersHandler } from './qry-handlers/get-users.handler';

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
