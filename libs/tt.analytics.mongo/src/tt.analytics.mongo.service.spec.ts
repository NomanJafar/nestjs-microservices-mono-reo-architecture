import { Test, TestingModule } from '@nestjs/testing';
import { TT_AnalyticsMongoService } from './tt.analytics.mongo.service';

describe('TtAnalyticsMongoService', () => {
  let service: TT_AnalyticsMongoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TT_AnalyticsMongoService],
    }).compile();

    service = module.get<TT_AnalyticsMongoService>(TT_AnalyticsMongoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
