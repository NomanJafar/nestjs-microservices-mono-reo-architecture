import { Test, TestingModule } from '@nestjs/testing';
import { TtOeeController } from './tt.oee.controller';
import { TtOeeService } from './tt.oee.service';

describe('TtOeeController', () => {
  let ttOeeController: TtOeeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TtOeeController],
      providers: [TtOeeService],
    }).compile();

    ttOeeController = app.get<TtOeeController>(TtOeeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ttOeeController.getHello()).toBe('Hello World!');
    });
  });
});
