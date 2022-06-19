import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar' })
  public first_name: string;

  @Column({ type: 'varchar' })
  public last_name: string;

  @Column({ type: 'varchar' })
  public address: string;

  @Column({ type: 'varchar', length: 4 })
  public postal_code: string;

  @Column({ type: 'varchar', length: 11 })
  public contact_phone_number: string;

  @Column({ type: 'varchar' })
  public email: string;

  @Column({ type: 'varchar' })
  public username: string;

  @Column({ type: 'varchar', select: false })
  public password: string;
}
