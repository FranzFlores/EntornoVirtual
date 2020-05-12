import { Controller, Body, Put} from '@nestjs/common';
import { AccountService } from './account.service';
import { UpdateAccountDTO } from './dto/update-password.dto';

@Controller('account')
export class AccountController {

    constructor(private accountService: AccountService){}

    @Put('/updatePassword')
    updatePassword(@Body() account:UpdateAccountDTO){
        return this.accountService.updatePassword(account);
    }

}
