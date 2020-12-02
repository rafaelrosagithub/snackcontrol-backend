import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("en_fornecedor")
class Provider {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    telephone: string;

    @Column()
    cnpj: string;

    @Column({ unique: true })
    email: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column()
    id_user_alteracao: number;

    @Column({
        default: false,
    })
    active: boolean;
}

export default Provider;
