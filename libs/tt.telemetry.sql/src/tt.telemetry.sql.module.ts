import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RawTelemetry } from './entities/raw_telemetry.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'tt_telemetry',
      entities: [RawTelemetry],
      synchronize: true, // Set to false in production
    }),
    TypeOrmModule.forFeature([RawTelemetry]),
  ],
  exports: [TypeOrmModule],
})
export class TT_TelemetrySqlModule { }
