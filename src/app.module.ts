import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { options } from '../app.datasource';
import { Product } from './product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(options),
    TypeOrmModule.forFeature([Product])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
