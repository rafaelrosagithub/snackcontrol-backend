import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("en_escola")
class Provider {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    escola: string;

    @Column()
    school_category: string;

    @Column()
    categoria_escola_id: number;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({
        default: true,
    })
    active: boolean;
}

export default Provider;
