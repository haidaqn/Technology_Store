import { Body, Controller, Delete, Get, Post, Put, Query, Patch, Param } from '@nestjs/common';
import { ProductRepository } from '../Repositories/product.repository';
import { PaginationProductDto, ProductDto } from '../Dto/product.dto';

@Controller('product')
export class ProductController {
    constructor(private readonly productRepository: ProductRepository) {}

    @Get('getAll')
    async getAllProduct(@Query() { page, limit }: PaginationProductDto) {}

    @Get(':id')
    async getProductById(@Param('id') id: string) {}

    @Get('createProduct')
    async createProduct(data: ProductDto) {}

    @Delete('delete/:id')
    async deleteProduct(@Param('id') id: string) {}

    @Patch('update/:id')
    async updateProduct(@Param('id') id: string, @Body() data: ProductDto) {}
}
