import Home from '@/features/home';
import Blog from '@/features/home/Blog';
import Faq from '@/features/home/FAQ';
import { HomeStore } from '@/features/home/HomeComponents';
import Products from '@/features/home/Products';
import Service from '@/features/home/Service';
import { Route, Routes } from 'react-router-dom';

export function HomeRouter() {
    return (
        <Routes>
            <Route path="" element={<Home />}>
                <Route path="/" element={<HomeStore />} />
                <Route path="products" element={<Products />} />
                <Route path="blog" element={<Blog />} />
                <Route path="service" element={<Service />} />
                <Route path="faq" element={<Faq />} />
            </Route>
        </Routes>
    );
}
