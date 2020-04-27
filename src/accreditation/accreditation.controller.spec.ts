import { Test, TestingModule } from '@nestjs/testing';
import { AccreditationController } from './accreditation.controller';

describe('Accreditation Controller', () => {
  let controller: AccreditationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccreditationController],
    }).compile();

    controller = module.get<AccreditationController>(AccreditationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
