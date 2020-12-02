import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("en_produto")
class Provider {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
    
    @Column()
    product_category: string;

    @Column()
    unid_medida: string;

    @Column()
    categoria_produto_id: string;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({
        default: false,
    })
    active: boolean;
}

export default Provider;
