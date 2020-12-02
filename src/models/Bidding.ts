import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
} from "typeorm";

@Entity("bidding")
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
    provider: string;

    @Column()
    user_creation: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date;
}

export default Provider;
