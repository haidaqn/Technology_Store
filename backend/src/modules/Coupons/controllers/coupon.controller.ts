import { Body, Controller, Delete, Get, Post, Put, Query, Patch, Param } from '@nestjs/common';
import { CouponRepository } from '../Repositories/categories.repository';
import { CouponDto, PaginationCouponDto } from '../Dto/coupon.dto';

@Controller('coupon')
export class CouponController {
    constructor(private readonly couponRepository: CouponRepository) {}

    @Get('getAll')
    async getAllCoupon(@Query() { page, limit }: PaginationCouponDto) {}

    @Get(':id')
    async getCouponById(@Param('id') id: string) {}

    @Get('createCoupon')
    async createCoupon(data: CouponDto) {}

    @Delete('delete/:id')
    async deleteCoupon(@Param('id') id: string) {}

    @Patch('update/:id')
    async updateCoupon(@Param('id') id: string, @Body() data: CouponDto) {}
}
