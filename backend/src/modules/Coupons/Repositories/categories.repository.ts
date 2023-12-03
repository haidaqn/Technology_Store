import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base/base.repository';
import { Coupon } from '../Models/coupon.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CouponRepository extends BaseRepository<Coupon> {
    constructor(
        @InjectModel('Coupon')
        private readonly couponRepository: Model<Coupon>
    ) {
        super(couponRepository);
    }

    async countDocuments(filter?: any) {
        return await this.couponRepository.countDocuments(filter);
    }

    async findByCoupon(name: string) {
        return await this.couponRepository.findOne({
            name
        });
    }
}
