import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() // 임시
export class UserAuth extends BaseEntity {

  @PrimaryGeneratedColumn()
  seqId: string;           // 사용자 아이디

  @Column()
  userId: string;   
}