import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/base/base.repository';
import { Categories } from '../Models/categories.model';

@Injectable()
export class CategoriesRepository extends BaseRepository<Categories> {
    constructor(
        @InjectModel('Categories')
        private readonly categoriesModel: Model<Categories>
    ) {
        super(categoriesModel);
    }

    async countDocuments(filter?: any) {
        return await this.categoriesModel.countDocuments(filter);
    }

    async findByCategories(title: string) {
        return await this.categoriesModel.findOne({
            title: title
        });
    }
}
