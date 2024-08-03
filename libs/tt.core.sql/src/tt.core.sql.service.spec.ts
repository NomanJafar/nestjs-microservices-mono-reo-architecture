import { Test, TestingModule } from '@nestjs/testing';
import { TT_CoreSqlService } from './tt.core.sql.service';

describe('TTCoreSqlService', () => {
  let service: TT_CoreSqlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TT_CoreSqlService],
    }).compile();

    service = module.get<TT_CoreSqlService>(TT_CoreSqlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
