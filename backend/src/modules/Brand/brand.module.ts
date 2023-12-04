import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandSchema } from './Models/brand.model';
import { BrandRepository } from './Repositories/brand.repository';
import { BrandService } from './Services/brand.service';
import { BrandController } from './controllers/brand.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Brand', schema: BrandSchema }])],
    controllers: [BrandController],
    providers: [BrandService, BrandRepository],
    exports: [BrandRepository, BrandService]
})
export class BrandModule {}
