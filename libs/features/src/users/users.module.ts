import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserController } from './users.controller';
import { TrackingsSqlModule } from '@app/trackings.sql';

@Module({
    imports: [TrackingsSqlModule.forRootAsync()],
    providers: [UsersService],
    exports: [UsersService],
    controllers: [UserController]
})
export class UsersModule { }
