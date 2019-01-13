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

export class CreateUserDto {
  readonly idAuth: string;
  @Length(1, 50)
  readonly username: string;
  @IsEmail()
  readonly mail: string;
}
