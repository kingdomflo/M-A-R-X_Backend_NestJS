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
  @Length(1, 50)
  readonly name: string;

  readonly tokenUserId: number;
}
