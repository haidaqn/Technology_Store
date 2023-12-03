import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CouponSchema } from './Models/coupon.model';
import { CouponRepository } from './Repositories/categories.repository';
import { CouponService } from './Services/coupon.service';
import { CouponController } from './controllers/coupon.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Coupon', schema: CouponSchema }])],
    controllers: [CouponController],
    providers: [CouponService, CouponRepository],
    exports: []
})
export class CouponModule {}
