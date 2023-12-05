import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { BrandModule } from './Brand/brand.module';
import { EmailModule } from './Email/email.module';
import { UserModule } from './User/user.module';
import { CategoriesModule } from './Categories/categories.module';
import { CouponModule } from './Coupons/coupon.module';
import { ProductModule } from './Product/product.module';
import { JwtModule } from '@nestjs/jwt';
import { OrderModule } from './Orders/orders.module';
import { IsAdminMiddleware, VerifyAccessTokenMiddleware } from 'src/shared/middlewares/verifyAccessToken.middleware';

@Module({
    imports: [
        BrandModule,
        EmailModule,
        UserModule,
        CategoriesModule,
        CouponModule,
        ProductModule,
        OrderModule,
        JwtModule.register({ secret: 'khoalahaidang2003x@@@@@abc' })
    ],
    providers: [],
    controllers: []
})
export class MainModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(VerifyAccessTokenMiddleware, IsAdminMiddleware)
            .forRoutes(
                'brand/createBrand',
                'brand/delete/:id',
                'brand/update/:id',
                'categories/createCategories',
                'categories/delete/:id',
                'categories/update/:id',
                'coupon/createCoupon',
                'coupon/delete/:id',
                'coupon/update/:id',
                'product/createProduct',
                'product/delete/:id',
                'product/update/:id'
            );
    }
}
