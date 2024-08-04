import { TT_CoreSqlModule } from '@app/tt.core.sql';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  providers: [],
  exports: [UsersModule],
  imports: [UsersModule],
})
export class FeaturesModule { }
