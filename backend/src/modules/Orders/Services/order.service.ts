import { Injectable, Req, UseGuards } from '@nestjs/common';
import { OrderRepository } from '../Repositories/coupon.repository';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class OrderService {
    constructor(private readonly orderRepository: OrderRepository) {}
    async getAllOrderByAdmin(page: number, limit: number) {
        const count = await this.orderRepository.countDocuments({});
        const count_page = (count / limit).toFixed();
        const data = await this.orderRepository.getByCondition(
            {},
            null,
            {
                sort: { _id: -1 },
                skip: (page - 1) * limit,
                limit: Number(limit)
            },
            {
                path: 'products.product',
                select: 'title price image thumb'
            }
        );
        return {
            data,
            current_page: page,
            count_page
        };
    }

    async getAllOrderByUserId(page: number, limit: number) {
        // const userId = req.user.id;
    }
}
