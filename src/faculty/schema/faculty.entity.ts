import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Career } from '../../career/schema/career.entity';

@Entity()
export class Faculty {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    location: string;

    @Column({ default: true })
    status: boolean;

    @OneToMany(type => Career, carrer => carrer.faculty)
    careers: Career[];

}