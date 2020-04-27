import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Faculty } from './schema/faculty.entity';
import { FacultyService } from './faculty.service';
import { FacultyController } from './faculty.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Faculty])],
  providers: [FacultyService],
  controllers: [FacultyController]
})
export class FacultyModule { }
