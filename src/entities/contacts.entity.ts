import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
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

  @Column({ unique: true, length: 45 })
  email: string;

  @Column({ length: 9, type: "varchar" })
  phone: string;

  @Column({ length: 80 })
  name: string;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: User;
}
