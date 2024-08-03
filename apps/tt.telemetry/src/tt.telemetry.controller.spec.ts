import { Test, TestingModule } from '@nestjs/testing';
import { TtTelemetryController } from './tt.telemetry.controller';
import { TtTelemetryService } from './tt.telemetry.service';

describe('TtTelemetryController', () => {
  let ttTelemetryController: TtTelemetryController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TtTelemetryController],
      providers: [TtTelemetryService],
    }).compile();

    ttTelemetryController = app.get<TtTelemetryController>(TtTelemetryController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ttTelemetryController.getHello()).toBe('Hello World!');
    });
  });
});
