import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetUsersQuery } from 'src/api/queries/get-users.query';
import { UserRepository } from '../user.repository';
import { UserDto } from 'src/api/dto/user.dto';

@QueryHandler(GetUsersQuery)
export class GetUsersHandler implements IQueryHandler<GetUsersQuery> {
	constructor(private readonly repository: UserRepository) {}

	async execute(query: GetUsersQuery): Promise<UserDto[]> {
		const users = await this.repository.findAll();
		return users.map(({ hashPass, ...usr }) => usr);
	}
}
