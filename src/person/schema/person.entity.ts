import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

import { Account } from '../../account/schema/account.entity';
import { Student } from 'src/student/schema/student.entity';
import { Administrative } from 'src/administrative/schema/administrative.entity';

@Entity()
export class Person {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName1: string;

    @Column()
    firstName2: string;

    @Column()
    lastName1: string;

    @Column()
    lastName2: string;

    @Column()
    dni: string;

    @Column()
    birthdate: Date;

    @Column()
    personalEmail: string;

    @Column()
    address: string;

    @Column()
    cellphone: string;

    @Column()
    maritalStatus: string;

    @Column()
    image:string;

    @Column({ default: true })
    status: boolean;

    @OneToOne(() => Account,(account:Account)=>account.person)
    account: Account;

    @OneToOne(()=>Administrative,(administrative:Administrative)=>administrative.person)
    administrative:Administrative;

    @OneToOne(() => Student,(student:Student)=>student.person)
    student: Student;

}