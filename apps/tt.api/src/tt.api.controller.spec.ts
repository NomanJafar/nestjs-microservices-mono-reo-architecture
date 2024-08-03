import { Test, TestingModule } from '@nestjs/testing';
import { TtApiController } from './tt.api.controller';
import { TtApiService } from './tt.api.service';

describe('TtApiController', () => {
  let ttApiController: TtApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TtApiController],
      providers: [TtApiService],
    }).compile();

    ttApiController = app.get<TtApiController>(TtApiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ttApiController.getHello()).toBe('Hello World!');
    });
  });
});
