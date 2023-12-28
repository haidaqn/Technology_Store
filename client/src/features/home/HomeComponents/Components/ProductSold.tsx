import { useAppSelector } from '@/app/hooks';

export const ProductSold = () => {
    const { productSold } = useAppSelector((state) => state.product);
    return <div>123</div>;
};
