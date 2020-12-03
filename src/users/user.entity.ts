// Node Modules ----------------------------------------------------------------
import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

// My Modules ------------------------------------------------------------------
import { Experiences } from '../enums/experience.enum';
import { States } from '../enums/state.enum';

@Entity()
export class User extends BaseEntity {
  //Id should be unique
  @PrimaryColumn()
  Id: string;

  @Column()
  FirstName: string;

  @Column()
  LastName: string;

  @Column()
  Email: string;

  @Column()
  State: States;

  @Column()
  PetExperience: Experiences;
}
