import { useAppSelector } from '@/app/hooks';
import { Card } from '@/components/ui/card';
import { handlePrice, renderStartNumber } from '@/utils';

export const FeaturedProducts = () => {
    const { productNew } = useAppSelector((state) => state.product);
    return (
        <div className="flex flex-col gap-5">
            <h1 className="uppercase text-xl font-bold py-1 border-b-[2px] border-red-600">
                Featured Products
            </h1>
            <div className="grid grid-cols-3 gap-5">
                {productNew.map((item, index) => (
                    <Card
                        className="col-span-1 border rounded-none p-6 flex gap-5 bg-white overflow-hidden"
                        key={index + item.title}
                    >
                        <img src={item.thumb} className="w-20 h-20" alt="" />
                        <div className="text-sm flex flex-col gap-1">
                            <span className=" font-[500]  text-black">{item.title}</span>
                            <span className="flex gap-0">
                                {renderStartNumber(item.totalRatings, 14)}
                            </span>
                            {item.totalRatings >= 4 ? (
                                <div className="flex gap-1">
                                    <span className="line-through text-black">
                                        {handlePrice(item.price)}
                                    </span>
                                    <span className="">{handlePrice(item.price * 0.93)}</span>
                                </div>
                            ) : (
                                <span className="text-black">{handlePrice(item.price)}</span>
                            )}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};
