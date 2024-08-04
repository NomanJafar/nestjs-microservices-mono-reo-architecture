import { Test, TestingModule } from '@nestjs/testing';
import { SignalsController } from './signals.controller';
import { SignalsService } from './signals.service';

describe('SignalsController', () => {
  let signalsController: SignalsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SignalsController],
      providers: [SignalsService],
    }).compile();

    signalsController = app.get<SignalsController>(SignalsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(signalsController.getHello()).toBe('Hello World!');
    });
  });
});
