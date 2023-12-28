import { IsNotEmpty } from 'class-validator';

export class ProductDto {
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    description: string;
    @IsNotEmpty()
    brand: string;
    @IsNotEmpty()
    price: number;
    @IsNotEmpty()
    category: string;
    @IsNotEmpty()
    thumb: string;
}
export class PaginationProductDto {
    @IsNotEmpty()
    page: number;
    @IsNotEmpty()
    limit: number;

    title: string;
    priceTo: number;
    priceEnd: number;
    color: string;
    sold: boolean;
}
