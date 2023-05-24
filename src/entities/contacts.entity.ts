import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity("contacts")
export class Contacts {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn({ type: "date" })
  registered: string;

  @Column({ length: 45 })
  email: string;

  @Column({ length: 11, type: "varchar" })
  phone: string;

  @Column({ length: 80 })
  name: string;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  user: User;
}
