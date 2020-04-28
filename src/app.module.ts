import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './person/person.module';
import { AccreditationModule } from './accreditation/accreditation.module';
import { PartialNoteModule } from './partial-note/partial-note.module';
import { AccountModule } from './account/account.module';
import { AdministrativeModule } from './administrative/administrative.module';
import { FacultyModule } from './faculty/faculty.module';
import { CareerModule } from './career/career.module';
import { CurriculumModule } from './curriculum/curriculum.module';
import { StudentModule } from './student/student.module';
import { RoleModule } from './role/role.module';
import { SubjectModule } from './subject/subject.module';
//Entidades
import { Person } from './person/schema/person.entity';
import { Account } from './account/schema/account.entity';
import { Administrative } from './administrative/schema/administrative.entity';
import { Faculty } from './faculty/schema/faculty.entity';
import { Career } from './career/schema/career.entity';
import { Curriculum } from './curriculum/schema/curriculum.entity';
import { Student } from './student/schema/student.entity';
import { Role } from './role/schema/role.entity';
import { Accreditation } from './accreditation/accreditation.entity';
import { DescriptionPartialModule } from './description-partial/description-partial.module';
import { ClassModule } from './class/class.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'entorno',
      entities: [Person, Account, Administrative, Role, Student, Faculty, Career, Curriculum,Accreditation],
      synchronize: true
    }),
    PersonModule,
    AccreditationModule,
    PartialNoteModule,
    AccountModule,
    AdministrativeModule,
    FacultyModule,
    CareerModule,
    CurriculumModule,
    SubjectModule,
    RoleModule,
    DescriptionPartialModule,
    ClassModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
