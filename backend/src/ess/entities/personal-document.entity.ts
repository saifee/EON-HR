import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'personal_documents' })
export class PersonalDocument {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  employeeId: string;

  @Column({ length: 120 })
  name: string;

  @Column({ length: 80, nullable: true })
  category?: string;

  @Column({ length: 255 })
  fileUrl: string;

  @Column({ type: 'date', nullable: true })
  expiresOn?: string;

  @Column({ length: 40, default: 'pending-verification' })
  status: string;

  @CreateDateColumn()
  uploadedAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
