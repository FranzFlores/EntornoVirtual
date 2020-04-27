import { Test, TestingModule } from '@nestjs/testing';
import { PartialNoteController } from './partial-note.controller';

describe('PartialNote Controller', () => {
  let controller: PartialNoteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PartialNoteController],
    }).compile();

    controller = module.get<PartialNoteController>(PartialNoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
