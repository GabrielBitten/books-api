
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './prisma.service';

import { CreateProdutoDto} from './create-produto.dto'
import { UpdateProdutoDto } from './update-produto.dto'

@Injectable()
export class ProdutoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProdutoDto: CreateProdutoDto) {
    return this.prisma.produto.create({ data: createProdutoDto });
  }

  async findAll() {
    return this.prisma.produto.findMany();
  }

  async findOne(id: number) {
    const produto = await this.prisma.produto.findUnique({ where: { id } });
    if (!produto) {
      throw new NotFoundException(`Produto com id ${id} não encontrado`);
    }
    return produto;
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto) {
    await this.findOne(id);
    return this.prisma.produto.update({
      where: { id },
      data: updateProdutoDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.produto.delete({ where: { id } });
  }
}
