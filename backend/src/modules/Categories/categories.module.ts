import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesSchema } from './Models/categories.model';
import { CategoriesRepository } from './Repositories/categories.repository';
import { CategoriesController } from './controllers/categories.controller';
import { CategoriesService } from './Services/categories.service';
import { BrandRepository } from '../Brand/Repositories/brand.repository';
import { BrandModule } from '../Brand/brand.module';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Categories', schema: CategoriesSchema }]),
        forwardRef(() => BrandModule)
    ],
    controllers: [CategoriesController],
    providers: [CategoriesService, CategoriesRepository],
    exports: []
})
export class CategoriesModule {}
