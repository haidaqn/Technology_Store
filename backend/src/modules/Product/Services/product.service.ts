import { HttpStatus, Injectable } from '@nestjs/common';
import { ProductDto } from '../Dto/product.dto';
import { ProductRepository } from '../Repositories/product.repository';

@Injectable()
export class ProductService {
    constructor(private readonly productRepository: ProductRepository) {}

    async GetAllCoupon(page: number, limit: number) {
        const count = await this.productRepository.countDocuments({});
        const count_page = (count / limit).toFixed();
        const data = await this.productRepository.getByCondition({}, null, {
            sort: { _id: -1 },
            skip: (page - 1) * limit,
            limit: Number(limit)
        });
        return {
            data,
            current_page: page,
            count_page
        };
    }

    async GetCouponById(id: string) {
        const coupont = await this.productRepository.findById(id);
        return {
            data: coupont ? coupont : null,
            success: coupont ? true : false,
            status: coupont ? HttpStatus.OK : HttpStatus.BAD_REQUEST,
            message: coupont ? 'Coupon found' : 'Coupon not found'
        };
    }

    async CreateCoupon(data: ProductDto) {}

    async UpdateCoupon(id: string, data: ProductDto) {}

    async DeleteCoupon(id: string) {
        const response = await this.productRepository.deleteOne(id);
        return {
            data: response ? response : null,
            success: response ? true : false,
            status: response ? HttpStatus.OK : HttpStatus.BAD_REQUEST,
            messgae: response ? 'Successfully delete coupon' : 'Delete a coupon failed'
        };
    }
}
