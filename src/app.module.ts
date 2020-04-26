import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//Conexion para la base de datos 
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './person/person.module';
import { AccountModule } from './account/account.module';

//Entidades
import { Person } from './person/person.entity';
import { Account } from './account/account.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'entorno',
      entities: [Person,Account],
      synchronize: true
    }),
    PersonModule,
    AccountModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
