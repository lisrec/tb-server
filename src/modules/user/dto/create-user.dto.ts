import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
	@ApiModelProperty() readonly login: string;
	@ApiModelProperty() readonly password: string;
	@ApiModelProperty() readonly displayName: string;
}
