import { Client } from "src/clients/domain/entities/client.entity";
import { User } from "src/users/domain/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';


@Entity()
export class Project {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ nullable: true })
    photoUrl: string;

    @ManyToMany(() => User)
    @JoinTable()
    users: User[];

    @ManyToOne(() => Client)
    client: Client;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}