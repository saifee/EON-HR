import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'expense_claims' })
export class ExpenseClaim {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  employeeId: string;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column({ length: 50 })
  category: string;

  @Column({ length: 250, nullable: true })
  description?: string;

  @Column({ length: 10, default: 'SAR' })
  currency: string;

  @Column({ length: 30, default: 'submitted' })
  status: string;

  @Column({ length: 255, nullable: true })
  receiptUrl?: string;

  @CreateDateColumn()
  submittedAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
