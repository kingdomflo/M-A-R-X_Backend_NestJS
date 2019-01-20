import { Controller, Get, Body } from '@nestjs/common';
import { RelationshipsService } from './relationships.service';

@Controller('api/relationships')
export class RelationshipsController {
  constructor(
    private readonly relationshipsService: RelationshipsService,
  ) { }
  
  @Get()
  findMy(@Body() body) {
    return this.relationshipsService.findAllByUser(body.tokenUserId);
  }
}
