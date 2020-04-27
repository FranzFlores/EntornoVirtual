import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//Conexion para la base de datos 
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './person/person.module';
import { AccreditationModule } from './accreditation/accreditation.module';
import { Person } from './person/person.entity';
import { PartialNoteModule } from './partial-note/partial-note.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'entorno',
      entities: [Person],
      synchronize: true
    }),
    PersonModule,
    AccreditationModule,
    PartialNoteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
