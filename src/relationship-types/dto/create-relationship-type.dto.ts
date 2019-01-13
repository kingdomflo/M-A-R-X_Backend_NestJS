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

export class CreateRelationshipTypeDto {
  @Length(1, 50)
  readonly name: string;
}
