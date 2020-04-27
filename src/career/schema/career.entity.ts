import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Faculty } from '../../faculty/schema/faculty.entity';
import { Curriculum } from "src/curriculum/schema/curriculum.entity";

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

    @OneToMany(type=>Curriculum,curriculum=> curriculum.carrer)
    curriculums:Curriculum[];

}