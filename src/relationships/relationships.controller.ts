import { Controller, Get, Body, Post } from '@nestjs/common';
import { RelationshipsService } from './relationships.service';
import { create } from 'domain';
import { CreateRelationshipDto } from './dto/create-relationship.dto';

@Controller('api/relationships')
export class RelationshipsController {
  constructor(private readonly relationshipsService: RelationshipsService) {}

  @Get()
  findMy(@Body() body) {
    return this.relationshipsService.findAllByUser(body.tokenUserId);
  }

  @Post()
  create(@Body() createRelationshipDto: CreateRelationshipDto) {
    return this.relationshipsService.create(createRelationshipDto);
  }
}
