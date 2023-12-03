import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandSchema } from './Models/brand.model';
import { BrandService } from './Services/brand.service';
import { BrandController } from './controllers/brand.controller';
import { BrandRepository } from './Repositories/brand.repository';
import { VerifyAccessTokenMiddleware, IsAdminMiddleware } from '../../shared/middlewares/verifyAccessToken.middleware';
@Module({
    imports: [MongooseModule.forFeature([{ name: 'Brand', schema: BrandSchema }])],
    controllers: [BrandController],
    providers: [BrandService, BrandRepository],
    exports: [BrandRepository, BrandService]
})
export class BrandModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(VerifyAccessTokenMiddleware, IsAdminMiddleware)
            .forRoutes('brand/createBrand', 'brand/delete/:id');
    }
}
