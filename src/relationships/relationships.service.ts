import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Relationships } from './relationships.entity';
import { Users } from 'src/users/users.entity';

@Injectable()
export class RelationshipsService {
  constructor(
    @InjectRepository(Relationships)
    private readonly repo: Repository<Relationships>,
    @InjectRepository(Users)
    private readonly usersRepo: Repository<Users>,
  ) {}

  async findAllByUser(id: number): Promise<Relationships[]> {
    // TODO do that with real ORM

    // return this.repo.find({
    //   relations: [
    //     'userRelationshipType',
    //     'userRelationshipType.user',
    //     'userRelationshipType.relationshipType',
    //   ],
    //   where: { userRelationshipType: { user: { id: id } } },
    // });

    return this.repo
      .createQueryBuilder('relationship')
      .innerJoinAndSelect(
        'relationship.userRelationshipType',
        'userRelationshipType',
      )
      .innerJoinAndSelect(
        'userRelationshipType.user',
        'user',
        'user.id = :id',
        { id: id },
      )
      .innerJoinAndSelect(
        'userRelationshipType.relationshipType',
        'relationshipType',
      )
      .getMany();
  }
}
