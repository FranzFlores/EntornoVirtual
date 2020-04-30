import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Enroll } from "src/enroll/enroll.entity";

@Entity()
export class Period{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @Column()
    state: boolean;

    @OneToOne(type => Enroll, enroll => enroll.period)
    enroll: Enroll;
}