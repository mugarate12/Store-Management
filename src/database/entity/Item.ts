import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  marca: string;

  @Column()
  codigo: string;

  @Column()
  produto: string;

  @Column()
  quantidade: number;

  @Column()
  tipo: string;

  @Column()
  observacao: string;
}
