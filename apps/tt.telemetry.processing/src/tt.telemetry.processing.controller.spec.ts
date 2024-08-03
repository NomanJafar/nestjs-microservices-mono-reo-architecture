import { Test, TestingModule } from '@nestjs/testing';
import { TtTelemetryProcessingController } from './tt.telemetry.processing.controller';
import { TtTelemetryProcessingService } from './tt.telemetry.processing.service';

describe('TtTelemetryProcessingController', () => {
  let ttTelemetryProcessingController: TtTelemetryProcessingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TtTelemetryProcessingController],
      providers: [TtTelemetryProcessingService],
    }).compile();

    ttTelemetryProcessingController = app.get<TtTelemetryProcessingController>(TtTelemetryProcessingController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ttTelemetryProcessingController.getHello()).toBe('Hello World!');
    });
  });
});
