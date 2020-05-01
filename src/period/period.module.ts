import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PeriodController } from './period.controller';
import { PeriodService } from './period.service';
import { Period } from './period.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Period])],
  controllers: [PeriodController],
  providers: [PeriodService]
})
export class PeriodModule {}
