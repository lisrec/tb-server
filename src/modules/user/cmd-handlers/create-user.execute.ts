import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { CreateUserCmd } from 'src/api/commands/create-user.cmd';
import { UserModel } from '../user.model';
import { UserRepository } from '../user.repository';
import { hashPassword } from 'src/utils/hash-password';
import { HttpException } from '@nestjs/common';

@CommandHandler(CreateUserCmd)
export class CreateUserExecute implements ICommandHandler<CreateUserCmd> {
	constructor(
		private userRepository: UserRepository,
		private readonly publisher: EventPublisher,
	) {}

	async execute(cmd: CreateUserCmd) {
		if (await this.userRepository.isDuplicated(cmd.login)) {
			throw new HttpException('User already exist.', 409);
		}

		const user = UserModel.register(
			cmd.login,
			hashPassword(cmd.password),
			cmd.displayName,
		);

		const userRegister = this.publisher.mergeObjectContext(
			await this.userRepository.store(user),
		);

		userRegister.create(user);
		userRegister.commit();

		return user;
	}
}
