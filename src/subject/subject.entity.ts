import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Curriculum } from "../curriculum/schema/curriculum.entity";
import { descriptionPartial } from "src/description-partial/description-partial.entity";

@Entity()
export class Subject{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: String;

    @Column()
    type: String;

    @Column()
    name: String;

    @Column()
    credits: number;

    @Column()
    time: number;

    @ManyToOne(type=>Curriculum, curriculum=>curriculum.subjects)
    curriculum:Curriculum;

    @OneToMany(type => descriptionPartial, descriptionpartial => descriptionpartial.subject)
    descriptionpartials: descriptionPartial[];

}