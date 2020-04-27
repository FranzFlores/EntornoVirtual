import { Test, TestingModule } from '@nestjs/testing';
import { AdministrativeController } from './administrative.controller';

describe('Administrative Controller', () => {
  let controller: AdministrativeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdministrativeController],
    }).compile();

    controller = module.get<AdministrativeController>(AdministrativeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
