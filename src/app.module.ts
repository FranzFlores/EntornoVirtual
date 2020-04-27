import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//Conexion para la base de datos 
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './person/person.module';
import { AccountModule } from './account/account.module';
import { AdministrativeModule } from './administrative/administrative.module';

//Entidades
import { Person } from './person/schema/person.entity';
import { Account } from './account/schema/account.entity';
import { Administrative } from './administrative/schema/administrative.entity';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'entorno',
      entities: [Person, Account,Administrative],
      synchronize: true
    }),
    PersonModule,
    AccountModule,
    AdministrativeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
