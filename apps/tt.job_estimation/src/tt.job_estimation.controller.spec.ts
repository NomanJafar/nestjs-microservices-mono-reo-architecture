import { Test, TestingModule } from '@nestjs/testing';
import { TtJobEstimationController } from './tt.job_estimation.controller';
import { TtJobEstimationService } from './tt.job_estimation.service';

describe('TtJobEstimationController', () => {
  let ttJobEstimationController: TtJobEstimationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TtJobEstimationController],
      providers: [TtJobEstimationService],
    }).compile();

    ttJobEstimationController = app.get<TtJobEstimationController>(TtJobEstimationController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ttJobEstimationController.getHello()).toBe('Hello World!');
    });
  });
});
