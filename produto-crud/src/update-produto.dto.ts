
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProdutoDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  value?: number;

  @IsNumber()
  @IsOptional()
  quantity?: number;
}
