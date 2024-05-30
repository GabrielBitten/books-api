
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}
