import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';

@Entity()
@Unique(['email'])
export class Client {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    clientName: string;

    @Column()
    contactName: string;

    
    @Column()
    email: string;

    @Column()
    phone: string;
    

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

