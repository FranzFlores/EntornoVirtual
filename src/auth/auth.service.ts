import { Injectable } from '@nestjs/common';
import { PersonService } from "../person/person.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";


@Injectable()
export class AuthService {

    constructor(
        private personService: PersonService,
        private jwtService: JwtService
    ) { }

    async validateUser(email: string,password: string): Promise<any>{
        const account = await this.personService.getAccont(email);
        const correctPassword = await bcrypt.compare(password,account.password);        
        if (account && correctPassword) {
            return account;
        }
        return null;
    }

    async login(user: any) {
        const payload = {
            id: user.id,
            institutionalEmail: user.institutionalEmail,
            firstName: user.person.firstName1,
            lastName: user.person.lastName1,
            dni: user.person.dni
        }
        return { token: this.jwtService.sign(payload) };
    }

}
