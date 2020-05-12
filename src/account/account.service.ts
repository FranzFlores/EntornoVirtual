import * as bcrypt from 'bcrypt';

import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Account } from 'src/account/schema/account.entity';
import { UpdateAccountDTO } from './dto/update-password.dto';

@Injectable()
export class AccountService {

    constructor(
        @InjectRepository(Account)
        public accountRepository: Repository<Account>
    ) { }

    //Obtener informacion de la cuenta
    async getAccount(institutionalEmail: string) {
        const account = await this.accountRepository.findOne({ where: { institutionalEmail }, relations: ["person"] });
        return account;
    }

    async updatePassword(data: UpdateAccountDTO) {        
        const account = await this.accountRepository.findOne({ where: { institutionalEmail: data.institutionalEmail } });
        let correctPassword = await bcrypt.compare(data.oldPassword, account.password);
        if (!correctPassword) {
            throw new HttpException('La persona ya existe', HttpStatus.BAD_REQUEST);
        }
        let passwordUpdate = await bcrypt.hash(data.newPassword, 10);
        account.password = passwordUpdate;
        return await this.accountRepository.update(account.id, account);
    }

}
