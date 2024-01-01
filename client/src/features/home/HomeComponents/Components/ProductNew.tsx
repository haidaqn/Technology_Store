import { useAppSelector } from '@/app/hooks';
import { ProductItem } from '@/components/common';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ProductNew = () => {
    const { productNew } = useAppSelector((state) => state.product);

    return (
        <>
            <Swiper
                autoplay={true}
                speed={1100}
                modules={[Autoplay]}
                loop={true}
                className="slide-base"
                style={{ width: '100%', height: '100%' }}
                slidesPerView={3}
                spaceBetween={18}
                allowTouchMove={true}
            >
                {productNew.map((item, index) => (
                    <SwiperSlide key={item._id + index}>
                        <ProductItem {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};
