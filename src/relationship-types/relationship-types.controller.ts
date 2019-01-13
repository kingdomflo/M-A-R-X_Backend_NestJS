import { Controller, Get, Post, Body } from '@nestjs/common';
import { RelationshipTypesService } from './relationship-types.service';
import { CreateRelationshipTypeDto } from './dto/create-relationship-type.dto';

@Controller('api/relationshipTypes')
export class RelationshipTypesController {
  constructor(
    private readonly relationshipTypesService: RelationshipTypesService,
  ) {}
  @Get()
  findAll() {
    return this.relationshipTypesService.findAll();
  }

  @Post()
  create(@Body() createRelationshipTypeDto: CreateRelationshipTypeDto) {
    return this.relationshipTypesService.create(createRelationshipTypeDto);
  }
}
