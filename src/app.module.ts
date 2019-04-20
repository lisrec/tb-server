import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { BudgetModule } from './modules/budget/budget.module';

@Module({
	imports: [UserModule, BudgetModule],
})
export class AppModule {}
