import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Accreditation } from './accreditation.entity';
import { AccreditationService } from './accreditation.service';
import { AccreditationController } from './accreditation.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Accreditation])],
  providers: [AccreditationService],
  controllers: [AccreditationController]
})
export class AccreditationModule { }
