import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Users } from 'src/users/users.entity';
import { RelationshipTypes } from 'src/relationship-types/relationship-types.entity';

@Entity()
export class UserRelationshipTypes {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Users, user => user.userRelationshipTypes)
  user: Users;

  @ManyToOne(type => RelationshipTypes, relationshipType => relationshipType.userRelationshipTypes)
  relationshipType: RelationshipTypes;
}
