import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogSchema } from './schemas/log.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/tt_analytics'),
    MongooseModule.forFeature([{ name: 'Log', schema: LogSchema }]),
  ],
  exports: [MongooseModule],
})
export class TT_AnalyticsMongoModule { }
