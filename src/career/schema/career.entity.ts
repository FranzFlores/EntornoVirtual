import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Faculty } from '../../faculty/schema/faculty.entity';

@Entity()
export class Career {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    objective: string;

    @Column()
    mission: string;

    @Column()
    vision: string;

    @Column()
    profile: string;

    @Column({ default: true })
    status: boolean;

    @ManyToOne(type=>Faculty,faculty=> faculty.careers)
    faculty: Faculty;
}