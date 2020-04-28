import { Test, TestingModule } from '@nestjs/testing';
import { DescriptionPartialController } from './description-partial.controller';

describe('DescriptionPartial Controller', () => {
  let controller: DescriptionPartialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DescriptionPartialController],
    }).compile();

    controller = module.get<DescriptionPartialController>(DescriptionPartialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
