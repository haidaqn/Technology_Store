import { Card, CardFooter } from '@/components/ui/card';
import { Product } from '@/models';
import { handlePrice, renderStartNumber } from '@/utils';
import { useTheme } from '../theme-provider';

export const ProductItem = (props: Product) => {
    const { title, thumb, totalRatings, price } = props;
    const { theme } = useTheme();

    return (
        <Card className="bg-white rounded-sm h-[52vh]  max-h-[450px] min-h-[350px] flex items-center justify-center flex-col gap-3">
            <img src={thumb} alt="" className="bg-center bg-cover w-[75%]" />
            <CardFooter className={`${theme === 'dark' && 'text-black'} flex flex-col gap-2`}>
                <span
                    className={`${
                        theme === 'dark' && 'text-black'
                    } text-xl font-medium text-center`}
                >
                    {title}
                </span>
                <span className="flex">{renderStartNumber(totalRatings, 22)}</span>
                <span className="text-lg">{handlePrice(price)}</span>
            </CardFooter>
        </Card>
    );
};
