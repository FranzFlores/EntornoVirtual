import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Administrative } from './schema/administrative.entity';
import { AdministrativeService } from './administrative.service';
import { AdministrativeController } from './administrative.controller';


@Module({
  imports:[TypeOrmModule.forFeature([Administrative])],
  providers: [AdministrativeService],
  controllers: [AdministrativeController]
})
export class AdministrativeModule { }
