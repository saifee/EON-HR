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

  @Column({ unique: true })
  staffId: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  department?: string;

  @Column({ nullable: true })
  jobTitle?: string;

  @Column({ nullable: true })
  managerId?: string;

  @Column({ nullable: true })
  passportNumber?: string;

  @Column({ nullable: true })
  onboardingTemplateId?: string;

  @Column({ default: 'Active' })
  contractStatus: 'Active' | 'Past';

  @Column({ nullable: true })
  tenantId?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
