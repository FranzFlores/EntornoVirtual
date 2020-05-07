import { Injectable } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";

import { AccountService } from 'src/account/account.service';


@Injectable()
export class AuthService {

    constructor(
        private accountService: AccountService,
        private jwtService: JwtService
    ) { }

    async validateUser(email: string,password: string): Promise<any>{
        const account = await this.accountService.getAccount(email);
        const correctPassword = await bcrypt.compare(password,account.password);        
        if (account && correctPassword) {
            return account;
        }
        return null;
    }

    async login(account: any) {
        const payload = {
            id: account.id,
            institutionalEmail: account.institutionalEmail,
            firstName: account.person.firstName1,
            lastName: account.person.lastName1,
            dni: account.person.dni
        }
        return { token: this.jwtService.sign(payload) };
    }

}
