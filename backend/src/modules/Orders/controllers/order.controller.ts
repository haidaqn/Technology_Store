import { Controller } from '@nestjs/common';

@Controller('order')
export class OrderController {
    // constructor(private readonly brandService: BrandService) {}
    // @Get('getAll')
    // async getAllBrand(@Query() { page, limit }: PaginationBrandDto) {
    //     return await this.brandService.GetAllBrand(page, limit);
    // }
    // @Get(':id')
    // async GetBrandById(@Param('id') id: string) {
    //     return await this.brandService.GetBrandById(id);
    // }
    // @Post('createBrand')
    // async createBrand(@Body() { title }: BrandDto) {
    //     return await this.brandService.CreateBrand(title);
    // }
    // @Delete('delete/:id')
    // async deleteBrand(@Param('id') id: string) {
    //     return await this.brandService.DeleteBrand(id);
    // }
    // @Patch('update/:id')
    // async updateBrand(@Param('id') id: string, @Body() { title }: BrandDto) {
    //     return await this.brandService.UpdateBrand(id, title);
    // }
}
