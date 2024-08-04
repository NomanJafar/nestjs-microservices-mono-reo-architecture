import { Test, TestingModule } from '@nestjs/testing';
import { SignalsSqlService } from './signals.sql.service';

describe('SignalsSqlService', () => {
  let service: SignalsSqlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SignalsSqlService],
    }).compile();

    service = module.get<SignalsSqlService>(SignalsSqlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
