import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("stock")
class Provider {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    qtd: number;

    @Column()
    unid_medida: string;

    @Column()
    lote: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Provider;
