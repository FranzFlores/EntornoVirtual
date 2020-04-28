import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Career } from "src/career/schema/career.entity";
import { Subject } from "../../subject/subject.entity";
@Entity()
export class Curriculum{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    year:number;

    @Column()
    numberCredits:number;

    @Column()
    numberHours:number;

    @ManyToOne(type=>Career,career=>career.curriculums)
    carrer:Career;

    @OneToMany(type=>Subject, subject=> subject.curriculum)
    subjects:Subject[];

}