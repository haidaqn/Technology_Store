export interface QuerryProduct {
    page: number;
    limit: number;
    title?: string;
    priceTo?: number;
    priceEnd?: number;
    sold?: boolean;
    color?: string;
}

export interface Rating {
    star: number;
    postedBy: string;
    comment: string;
    updateAt?: string;
    _id: string;
}

export interface Product {
    color: string[];
    _id: string;
    title: string;
    slug: string;
    thumb: string;
    price: number;
    category: string;
    quantity: number;
    sold: number;
    images: string[];
    totalRatings: number;
    ratings: Rating[];
    createdAt: string;
    updatedAt: string;
    __v: number;
}
