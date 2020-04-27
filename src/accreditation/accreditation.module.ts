import { Module } from '@nestjs/common';
import { AccreditationService } from './accreditation.service';
import { AccreditationController } from './accreditation.controller';

@Module({
  providers: [AccreditationService],
  controllers: [AccreditationController]
})
export class AccreditationModule {}
