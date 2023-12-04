import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base/base.repository';
import { Product } from '../Models/product.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductRepository extends BaseRepository<Product> {
    constructor(
        @InjectModel('Product')
        private readonly productRepository: Model<Product>
    ) {
        super(productRepository);
    }

    async countDocuments(filter?: any) {
        return await this.productRepository.countDocuments(filter);
    }

    async findByCoupon(name: string) {
        return await this.productRepository.findOne({
            name
        });
    }
}
