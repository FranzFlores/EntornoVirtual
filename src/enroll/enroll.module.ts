import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EnrollController } from './enroll.controller';
import { EnrollService } from './enroll.service';
import { Enroll } from './enroll.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Enroll])],
  controllers: [EnrollController],
  providers: [EnrollService]
})
export class EnrollModule {}
