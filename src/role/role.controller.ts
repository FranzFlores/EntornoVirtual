import { Controller, Post, Body, Get } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDTO } from './dto/create-role';

@Controller('role')
export class RoleController {
    constructor(private roleService:RoleService){}

    @Post('create')
    createRole(@Body() role:CreateRoleDTO){
        return this.roleService.createRole(role);
    }

    @Get('/api')
    Messsage(){
        return "Hii";
    }

}
