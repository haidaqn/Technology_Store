import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandModule } from '../Brand/brand.module';
import { CategoriesSchema } from './Models/categories.model';
import { CategoriesRepository } from './Repositories/categories.repository';
import { CategoriesService } from './Services/categories.service';
import { CategoriesController } from './controllers/categories.controller';

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
