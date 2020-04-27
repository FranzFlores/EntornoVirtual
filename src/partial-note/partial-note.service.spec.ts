import { Test, TestingModule } from '@nestjs/testing';
import { PartialNoteService } from './partial-note.service';

describe('PartialNoteService', () => {
  let service: PartialNoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartialNoteService],
    }).compile();

    service = module.get<PartialNoteService>(PartialNoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
