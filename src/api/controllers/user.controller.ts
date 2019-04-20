import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserDto } from '../dto/user.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	@ApiResponse({
		status: 201,
		description: 'New user has been successfully created.',
	})
	@ApiResponse({ status: 400, description: 'Bad reuest.' })
	@ApiResponse({ status: 409, description: 'User login already exist.' })
	public async createUser(@Body() user: CreateUserDto) {
		return this.userService.createUser(user);
	}

	@Get()
	public async getUsers(): Promise<UserDto[]> {
		return this.userService.getUsers();
	}
}
