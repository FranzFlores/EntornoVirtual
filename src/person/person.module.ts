import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';

import { Person } from './schema/person.entity';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { Account } from 'src/account/schema/account.entity';
import { Student } from 'src/student/schema/student.entity';
import { Administrative } from 'src/administrative/schema/administrative.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Person, Account, Student, Administrative]),
    //Para subir archivos
    MulterModule.register({
        dest: './uploads/person'
    })
    ],
    providers: [PersonService],
    controllers: [PersonController]
})
export class PersonModule { }
