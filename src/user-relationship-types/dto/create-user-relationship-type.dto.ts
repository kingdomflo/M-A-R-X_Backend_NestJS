import {
  validate,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
} from 'class-validator';

export class CreateUserRelationshipTypeDto {
  readonly relationshipTypeId: number;
  readonly userId: number;
}
