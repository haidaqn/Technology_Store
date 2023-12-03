import { Module } from '@nestjs/common';
import { BrandModule } from './Brand/brand.module';
import { EmailModule } from './Email/email.module';
import { UserModule } from './User/user.module';
import { CategoriesModule } from './Categories/categories.module';
import { CouponModule } from './Coupons/coupon.module';

@Module({
    imports: [BrandModule, EmailModule, UserModule, CategoriesModule, CouponModule],
    providers: [],
    controllers: []
})
export class MainModule {}
