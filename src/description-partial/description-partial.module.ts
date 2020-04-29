import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DescriptionPartialController } from './description-partial.controller';
import { DescriptionPartialService } from './description-partial.service';
import { DescriptionPartial } from './description-partial.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DescriptionPartial])],
  controllers: [DescriptionPartialController],
  providers: [DescriptionPartialService]
})
export class DescriptionPartialModule {}
