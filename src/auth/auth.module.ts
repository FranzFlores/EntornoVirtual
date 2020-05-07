import { Module } from '@nestjs/common';
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";

import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { AccountModule } from 'src/account/account.module';


@Module({
  imports: [
    AccountModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '86400s' }
    })
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule { }
