import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { Administrative } from "src/administrative/schema/administrative.entity";

@Entity()
export class Role{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @ManyToMany(type=>Role)
    @JoinTable()
    administrative:Administrative[];

}