import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Accreditation } from "../accreditation/accreditation.entity";
import { Enroll } from "src/enroll/enroll.entity";
@Entity()
export class partialNote {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    testScore: number;

    @Column()
    averageTasks: number;

    @Column()
    averageLessons: number;

    @OneToMany(type => Accreditation, accreditation => accreditation.partialnote)
    accreditations : Accreditation[];

    @ManyToOne(type => Enroll, enroll => enroll.partialnotes)
    enroll: Enroll;
}