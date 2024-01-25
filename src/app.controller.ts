import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<Product[]> {
    return this.appService.listProducts();
  }

  @Post()
  createProduct(@Body() product: CreateProductDto): Promise<Product> {
    return this.appService.createProduct(product);
  }
}
