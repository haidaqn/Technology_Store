import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { OrderService } from '../Services/order.service';
import { PagingOrder } from '../Dto/order.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}
    @Get('admin/getAll')
    async getAllOrderByAdmin(@Query() { page, limit }: PagingOrder) {
        return await this.orderService.getAllOrderByAdmin(page, limit);
    }

    @Get('user/getAll')
    async getAllOrderByUser(@Query() { page, limit }: PagingOrder) {
        return await this.orderService.getAllOrderByUserId(page, limit);
    }
}
