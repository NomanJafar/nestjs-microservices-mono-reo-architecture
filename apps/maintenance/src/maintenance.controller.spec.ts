import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceController } from './maintenance.controller';
import { MaintenanceService } from './maintenance.service';

describe('MaintenanceController', () => {
  let maintenanceController: MaintenanceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MaintenanceController],
      providers: [MaintenanceService],
    }).compile();

    maintenanceController = app.get<MaintenanceController>(MaintenanceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(maintenanceController.getHello()).toBe('Hello World!');
    });
  });
});
