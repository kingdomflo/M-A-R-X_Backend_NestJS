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
  IsNotEmpty,
} from 'class-validator';

export class CreateRelationshipTypeDto {
  @IsNotEmpty()
  @Length(1, 10)
  readonly name: string;
}
