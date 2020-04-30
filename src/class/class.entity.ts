import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToOne, ManyToMany } from "typeorm";
import { DescriptionPartial } from "../description-partial/description-partial.entity";
import { Enroll } from "src/enroll/enroll.entity";

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

    @ManyToOne(type => DescriptionPartial, descriptionpartial => descriptionpartial.classes)
    descriptionpartial: DescriptionPartial;

    @ManyToMany(() => Enroll)
    @JoinTable()
    classes: Class[];
}