import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigurationService {
    constructor(private configService: ConfigService) { }

    get databaseHost(): string {
        return this.configService.get<string>('DB_HOST');
    }

    get databasePort(): number {
        return this.configService.get<number>('DB_PORT');
    }

    get databaseUsername(): string {
        return this.configService.get<string>('DB_USERNAME');
    }

    get databasePassword(): string {
        return this.configService.get<string>('DB_PASSWORD');
    }

    get databaseName(): string {
        return this.configService.get<string>('DB_NAME');
    }

    // Add other configuration getters as needed
}
