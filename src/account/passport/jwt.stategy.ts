import * as passport from 'passport';

import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { PersonService } from 'src/person/person.service';

@Injectable()
export class JwtStrategy extends Strategy {
    constructor(private personService:PersonService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            passReqToCallback: true,
            secretOrKey: 'Entorno'
        })
        async (req,payload,next) => await this.verify(req,payload,next)
        passport.use(this);
    }


    public async verify(req,payload,done){
        //return await this.personService.fi
    }
}