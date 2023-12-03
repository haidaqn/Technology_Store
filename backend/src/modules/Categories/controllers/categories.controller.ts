import { Body, Controller, Delete, Get, Post, Put, Query, Patch, Param } from '@nestjs/common';
import { CategoriesService } from '../Services/categories.service';
import { CreateCategories, PaginationCategoriesDto } from '../Dto/categories.dto';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {}

    @Get('getAll')
    async getAllCategorie(@Query() { page, limit }: PaginationCategoriesDto) {
        return await this.categoriesService.GetAllCategories(page, limit);
    }

    @Get(':id')
    async getCateByID(@Param('id') id: string) {
        return await this.categoriesService.GetCategoriesById(id);
    }

    @Post('createCategories')
    async createCategories(@Body() data: CreateCategories) {
        return await this.categoriesService.CreateCategories(data);
    }

    @Delete('delete/:id')
    async deleteBrand(@Param('id') id: string) {
        return await this.categoriesService.DeleteCategories(id);
    }

    @Patch('update/:id')
    async updateBrand(@Param('id') id: string, @Body() data: CreateCategories) {
        return await this.categoriesService.UpdateCategories(id, data);
    }
}
