import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { descriptionPartial } from "../description-partial/description-partial.entity";

@Entity()
export class Class{

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    topic: String;

    @Column()
    objective: String;
    
    @Column()
    date: String;

    @ManyToOne(type => descriptionPartial, descriptionpartial => descriptionpartial.classes)
    descriptionpartial: descriptionPartial;
}