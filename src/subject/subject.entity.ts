import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Curriculum } from "../curriculum/schema/curriculum.entity";

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
    object: String;

    @Column()
    credits: number;

    @Column()
    time: number;

    @ManyToOne(type=>Curriculum, curriculum=>curriculum.subjects)
    curriculum:Curriculum;

}