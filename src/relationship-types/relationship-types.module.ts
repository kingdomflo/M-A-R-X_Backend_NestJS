import { Module } from '@nestjs/common';
import { RelationshipTypesController } from './relationship-types.controller';
import { RelationshipTypesService } from './relationship-types.service';
import { TypeOrmModule, InjectRepository } from '@nestjs/typeorm';
import { RelationshipTypes } from './relationship-types.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RelationshipTypes])],
  controllers: [RelationshipTypesController],
  providers: [RelationshipTypesService],
})
export class RelationshipTypesModule {}
