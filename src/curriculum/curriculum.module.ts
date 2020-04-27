import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Curriculum } from '../curriculum/schema/curriculum.entity';
import { CurriculumService } from './curriculum.service';
import { CurriculumController } from './curriculum.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Curriculum])],
  providers: [CurriculumService],
  controllers: [CurriculumController]
})
export class CurriculumModule { }
