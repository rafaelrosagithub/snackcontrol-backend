import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("order")
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

    @Column()
    escola: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column()
    id_stock: number;
}

export default Provider;
