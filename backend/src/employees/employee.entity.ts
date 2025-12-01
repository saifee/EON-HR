import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'employees' })
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  department?: string;

  @Column({ nullable: true })
  jobTitle?: string;

  @Column({ nullable: true })
  managerId?: string;

  @Column({ nullable: true })
  tenantId?: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ type: 'json', nullable: true })
  contacts?: Array<{ type: string; value: string }>;

  @Column({ type: 'json', nullable: true })
  emergencyContacts?: Array<{ name: string; relation: string; phone: string }>;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
