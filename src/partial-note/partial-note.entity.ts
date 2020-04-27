import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from "typeorm";
import { Accreditation } from "../accreditation/accreditation.entity";
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
}