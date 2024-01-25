import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Product) private readonly productRepo: Repository<Product>
  ) {}

  listProducts(): Promise<Product[]> {
    return this.productRepo.find();
  }

  createProduct(product: CreateProductDto): Promise<Product> {
    return this.productRepo.save(product);
  }
}
