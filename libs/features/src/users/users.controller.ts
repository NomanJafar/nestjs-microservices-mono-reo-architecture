import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { CreateUserDto } from '@app/common';
import { UsersService } from './users.service';
import { User } from '@app/trackings.sql/entities/user.entity';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UsersService) { }

    @Get(':id')
    async getUserById(@Param('id') id: number): Promise<User> {
        return this.userService.findOne(id);
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.createUser(createUserDto.username, createUserDto.email);
    }
}
