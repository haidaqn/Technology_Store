import { HttpStatus, Injectable } from '@nestjs/common';
import { ProductDto } from '../Dto/product.dto';
import { ProductRepository } from '../Repositories/product.repository';

@Injectable()
export class ProductService {
    constructor(private readonly productRepository: ProductRepository) {}

    async getAllProduct(
        page: number,
        limit: number,
        title?: string,
        priceTo?: number,
        priceEnd?: number,
        color?: string,
        sold: boolean = false
    ) {
        const searchCondition: any = {};
        if (title) {
            searchCondition.title = { $regex: title, $options: 'i' };
        }
        if (priceTo !== undefined && priceEnd !== undefined) {
            searchCondition.price = {};
            if (priceTo !== undefined) searchCondition.price.$gte = priceTo;
            if (priceEnd !== undefined) searchCondition.price.$lte = priceEnd;
        }
        if (color) {
            searchCondition.color = { $regex: color, $options: 'i' };
        }
        try {
            const sortCondition = sold ? { sold: -1, _id: -1, createdAt: -1 } : { _id: -1, createdAt: -1 };
            console.log(sortCondition);
            const count = await this.productRepository.countDocuments(searchCondition);
            const count_page = Math.ceil(count / limit);
            const data = await this.productRepository.getByCondition(searchCondition, null, {
                sort: sortCondition,
                skip: (page - 1) * limit,
                limit: Number(limit)
            });
            return {
                data,
                current_page: page,
                count_page
            };
        } catch (error) {
            throw new Error(error.message);
        }
    }
}
