import { Test, TestingModule } from '@nestjs/testing';
import { TtDowntimeController } from './tt.downtime.controller';
import { TtDowntimeService } from './tt.downtime.service';

describe('TtDowntimeController', () => {
  let ttDowntimeController: TtDowntimeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TtDowntimeController],
      providers: [TtDowntimeService],
    }).compile();

    ttDowntimeController = app.get<TtDowntimeController>(TtDowntimeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ttDowntimeController.getHello()).toBe('Hello World!');
    });
  });
});
