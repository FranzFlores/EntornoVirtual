import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

//Modulos
import { AccountModule } from './account/account.module';
import { AccreditationModule } from './accreditation/accreditation.module';
import { AdministrativeModule } from './administrative/administrative.module';
import { CareerModule } from './career/career.module';
import { ClassModule } from './class/class.module';

import { CurriculumModule } from './curriculum/curriculum.module';
import { DescriptionPartialModule } from './description-partial/description-partial.module';
import { ClassModule } from './class/class.module';
import { EnrollModule } from './enroll/enroll.module';
import { PartialNoteModule } from './partial-note/partial-note.module';

import { AccreditationModule } from './accreditation/accreditation.module';


import { PeriodModule } from './period/period.module';
import { PersonModule } from './person/person.module';
import { RoleModule } from './role/role.module';
import { StudentModule } from './student/student.module';
import { SubjectModule } from './subject/subject.module';


//Entidades
import { Account } from './account/schema/account.entity';
import { Accreditation } from './accreditation/accreditation.entity';
import { Administrative } from './administrative/schema/administrative.entity';
import { Career } from './career/schema/career.entity';
import { Class } from './class/class.entity';

import { Curriculum } from './curriculum/schema/curriculum.entity';
import { DescriptionPartial } from './description-partial/description-partial.entity';
import { Class } from './class/class.entity';
import { Enroll } from './enroll/enroll.entity';
import { PartialNote } from "./partial-note/partial-note.entity";
import { Accreditation } from './accreditation/accreditation.entity';




@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'entorno',
      entities: [Person, Account, Administrative, Role, Student,
        Faculty, Career, Curriculum, Subject, DescriptionPartial, Class,
        Enroll,PartialNote],
      synchronize: true
    }),
    AccountModule,
    AccreditationModule,
    AdministrativeModule,
    CareerModule,
    ClassModule,
    CurriculumModule,
    DescriptionPartialModule,
    EnrollModule,
    PartialNoteModule,
    PeriodModule
    // AccreditationModule,
    // PartialNoteModule,
    // SubjectModule,
    // DescriptionPartialModule,
    // ClassModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
