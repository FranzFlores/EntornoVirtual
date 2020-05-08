import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToOne, ManyToMany } from "typeorm";
import { DescriptionPartial } from "../description-partial/description-partial.entity";

@Entity()
export class Class{

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    topic: String;

    @Column()
    objective: String;
    
    @Column()
    date: String;//TODO: cambiar el tipo de dato para la fecha

    @ManyToOne(type => DescriptionPartial, descriptionpartial => descriptionpartial.classes)
    descriptionpartial: DescriptionPartial;
}