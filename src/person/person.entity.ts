import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Account } from '../account/account.entity';

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

    @Column({ default: true })
    status: boolean;

    @OneToOne(type =>Account, account => account.person)
    account: Account;
}