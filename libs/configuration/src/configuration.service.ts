import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigurationService {
    constructor(private configService: ConfigService) { }

    get databaseHost(): string {
        const value = this.configService.get<string>('CORE_DB_HOST');
        return value;
    }

    get databasePort(): number {
        const value = this.configService.get<number>('CORE_DB_PORT');
        return value;
    }

    get databaseUsername(): string {
        const value = this.configService.get<string>('CORE_DB_USERNAME');
        return value;
    }

    get databasePassword(): string {
        const value = this.configService.get<string>('CORE_DB_PASSWORD');
        return value;
    }

    get databaseName(): string {
        const value = this.configService.get<string>('CORE_DB_NAME');
        return value;
    }

    // Add other configuration getters as needed
}
