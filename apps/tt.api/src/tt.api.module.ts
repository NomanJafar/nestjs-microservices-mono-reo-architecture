import { Module } from '@nestjs/common';
import { TT_ApiController } from './tt.api.controller';
import { TT_ApiService } from './tt.api.service';
import { ConfigurationModule } from '@app/configuration';
import * as path from 'path';
import { TT_CoreSqlModule } from '@app/tt.core.sql';

@Module({
  imports: [
    ConfigurationModule.forRoot({
      envFilePath: process.env.NODE_ENV === 'production' ? path.resolve(__dirname, './../.env.development') : path.resolve(__dirname, './../.env.production'),
      isGlobal: true,
    }),
    TT_CoreSqlModule.forRootAsync(),
  ],
  controllers: [TT_ApiController],
  providers: [TT_ApiService],
})
export class TT_ApiModule { }
