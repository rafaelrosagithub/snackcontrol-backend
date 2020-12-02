import {
    Column,
    CreateDateColumn,
    Entity,
    Generated,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("provider")
class Client {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    telephone: string;

    @Column()
    cnpj: string;

    @Column()
    @Generated("uuid")
    code: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column()
    user_uuid: string;

    @Column({
        default: false
    })
    finished: boolean;
}

export default Client;
