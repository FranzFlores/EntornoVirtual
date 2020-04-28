import { Test, TestingModule } from '@nestjs/testing';
import { DescriptionPartialService } from './description-partial.service';

describe('DescriptionPartialService', () => {
  let service: DescriptionPartialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DescriptionPartialService],
    }).compile();

    service = module.get<DescriptionPartialService>(DescriptionPartialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
