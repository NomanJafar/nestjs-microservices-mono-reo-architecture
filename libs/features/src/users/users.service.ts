import { LoggerService } from '@app/logger';
import { User } from '@app/trackings.sql/entities/user.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private logger: LoggerService
    ) { logger.setContext(UsersService.name) }

    async findOne(id: number): Promise<User> {
        this.logger.log(id.toString());
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }

    async createUser(name: string, email: string): Promise<User> {
        const user = this.userRepository.create({ name, email });
        return this.userRepository.save(user);
    }

    async updateUser(id: number, name: string, email: string): Promise<User> {
        const user = await this.findOne(id);
        user.name = name;
        user.email = email;
        return this.userRepository.save(user);
    }
}
