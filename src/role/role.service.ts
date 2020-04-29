import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Role } from './schema/role.entity';
import { CreateRoleDTO } from './dto/create-role';


@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role)
        private roleRepository: Repository<Role>
    ) { }


    async createRole(data: CreateRoleDTO):Promise<Role> {
        const role:Role = await this.roleRepository.save(data);
        return role;
    }


}
