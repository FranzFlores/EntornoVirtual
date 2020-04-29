import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

//Modulos
import { PersonModule } from './person/person.module';
import { AccountModule } from './account/account.module';
import { AdministrativeModule } from './administrative/administrative.module';
import { RoleModule } from './role/role.module';
import { StudentModule } from './student/student.module';

import { FacultyModule } from './faculty/faculty.module';
import { CareerModule } from './career/career.module';
import { CurriculumModule } from './curriculum/curriculum.module';
import { SubjectModule } from './subject/subject.module';
import { DescriptionPartialModule } from './description-partial/description-partial.module';
import { ClassModule } from './class/class.module';

import { AccreditationModule } from './accreditation/accreditation.module';
import { PartialNoteModule } from './partial-note/partial-note.module';

//Entidades
import { Person } from './person/schema/person.entity';
import { Account } from './account/schema/account.entity';
import { Administrative } from './administrative/schema/administrative.entity';
import { Role } from './role/schema/role.entity';
import { Student } from './student/schema/student.entity';

import { Faculty } from './faculty/schema/faculty.entity';
import { Career } from './career/schema/career.entity';
import { Curriculum } from './curriculum/schema/curriculum.entity';
import { Subject } from './subject/subject.entity';
import { DescriptionPartial } from './description-partial/description-partial.entity';
import { Class } from './class/class.entity';

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
        Faculty, Career, Curriculum, Subject, DescriptionPartial,Class],
      synchronize: true
    }),
    PersonModule,
    AccountModule,
    AdministrativeModule,
    RoleModule,
    StudentModule,
    FacultyModule,
    CareerModule,
    CurriculumModule,
    SubjectModule,
    DescriptionPartialModule,
    ClassModule
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
