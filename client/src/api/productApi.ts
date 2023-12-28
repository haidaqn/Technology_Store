import axiosClient from './axiosClient';
import { QuerryProduct } from '@/models';
import queryString from 'query-string';

const ProductApi = {
    getProduct(query: QuerryProduct) {
        const { page, limit, title, priceTo, priceEnd, sold, color } = query;
        const queryParams = {
            page,
            limit,
            title,
            priceTo,
            priceEnd,
            sold,
            color,
        };
        const validQueryParams = queryString.stringify(queryParams, {
            skipNull: true,
            skipEmptyString: true,
        });
        const url = `product/getAll?${validQueryParams}`;

        return axiosClient.get(url);
    },
};
export default ProductApi;
