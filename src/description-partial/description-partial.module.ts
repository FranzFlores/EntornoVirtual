import { Module } from '@nestjs/common';
import { DescriptionPartialController } from './description-partial.controller';
import { DescriptionPartialService } from './description-partial.service';

@Module({
  controllers: [DescriptionPartialController],
  providers: [DescriptionPartialService]
})
export class DescriptionPartialModule {}
