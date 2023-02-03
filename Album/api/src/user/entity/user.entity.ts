import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {

  @PrimaryColumn()
  userId: string;           // 사용자 아이디

  @Column()
  userpassword: string;   
}