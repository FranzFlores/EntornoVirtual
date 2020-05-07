import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Account } from 'src/account/schema/account.entity';

@Injectable()
export class AccountService {

    constructor(
        @InjectRepository(Account)
        public accountRepository:Repository<Account>
    ){}

    //Obtener informacion de la cuenta
    getAccount(institutionalEmail:string){
        const account = this.accountRepository.findOne({where:{institutionalEmail},relations:["person"]});
        return account;
    }

}
