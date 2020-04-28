import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Administrative } from "src/administrative/schema/administrative.entity";

@Entity()
export class Role{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @ManyToOne(type=>Administrative,administrative=> administrative.roles)
    administrative:Administrative;
}