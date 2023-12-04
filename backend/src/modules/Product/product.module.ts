import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './Models/product.model';
import { ProductRepository } from './Repositories/product.repository';
import { ProductService } from './Services/product.service';
import { ProductController } from './controllers/product.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }])],
    controllers: [ProductController],
    providers: [ProductService, ProductRepository],
    exports: []
})
export class ProductModule {}
