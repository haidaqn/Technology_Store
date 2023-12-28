import { useState } from 'react';
import { DayDetail, ProductNew, ProductSold } from './Components';
import { SlidebarHome } from './Components/Slidebar';

export const HomeStore = () => {
    const [productNew, setProductNew] = useState<boolean>(true);

    return (
        <div className="flex flex-col gap-6">
            <SlidebarHome />
            <div className="flex  gap-5 h-fulll">
                <div className="flex-1 h-full">
                    <DayDetail />
                </div>
                <div className="flex-3 h-full">{productNew ? <ProductNew /> : <ProductSold />}</div>
            </div>
        </div>
    );
};
