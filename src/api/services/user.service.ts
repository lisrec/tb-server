import { Injectable, HttpException } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCmd } from '../commands/create-user.cmd';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserDto } from '../dto/user.dto';
import { GetUsersQuery } from '../queries/get-users.query';

@Injectable()
export class UserService {
	constructor(
		private readonly commandBus: CommandBus,
		private readonly queryBus: QueryBus,
	) {}

	public async createUser(user: CreateUserDto): Promise<UserDto> {
		if (!user.login) {
			throw new HttpException('Missing login property.', 400);
		}

		if (!user.password) {
			throw new HttpException('Missing password property.', 400);
		}

		if (!user.displayName) {
			throw new HttpException('Missing displayName property.', 400);
		}

		return this.commandBus.execute(
			new CreateUserCmd(user.login, user.password, user.displayName),
		);
	}

	public async getUsers(): Promise<UserDto[]> {
		return this.queryBus.execute(new GetUsersQuery());
	}
}
