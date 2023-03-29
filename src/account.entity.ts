import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Account {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    accountNumber: number;

    @Column()
    balance: number;

}