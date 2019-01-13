import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateRelationshipTypeDto } from './dto/create-relationship-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RelationshipTypes } from './relationship-types.entity';

@Injectable()
export class RelationshipTypesService {
  constructor(
    @InjectRepository(RelationshipTypes)
    private readonly repository: Repository<RelationshipTypes>,
  ) {}

  async findAll(): Promise<RelationshipTypes[]> {
    return this.repository.find();
  }

  create(createRelationshipTypeDto: CreateRelationshipTypeDto): Promise<RelationshipTypes> {
    return this.repository.save(createRelationshipTypeDto);
  }
}
