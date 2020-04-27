import { Test, TestingModule } from '@nestjs/testing';
import { CurriculumController } from './curriculum.controller';

describe('Curriculum Controller', () => {
  let controller: CurriculumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurriculumController],
    }).compile();

    controller = module.get<CurriculumController>(CurriculumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
