import { Test, TestingModule } from '@nestjs/testing';
import { SignalsProcessingController } from './signals_processing.controller';
import { SignalsProcessingService } from './signals_processing.service';

describe('SignalsProcessingController', () => {
  let signalsProcessingController: SignalsProcessingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SignalsProcessingController],
      providers: [SignalsProcessingService],
    }).compile();

    signalsProcessingController = app.get<SignalsProcessingController>(SignalsProcessingController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(signalsProcessingController.getHello()).toBe('Hello World!');
    });
  });
});
