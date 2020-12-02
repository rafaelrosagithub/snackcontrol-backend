import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Tasks {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    escola: string;

    @Column()
    school_category: string;

    @Column()
    provider: string;

    @Column()
    user_creation: string;

    @Column()
    qtd: number;

    @Column()
    lote: string;

    @Column()
    unid_medida: string;

    @Column({
        default: false
    })
    finished: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}