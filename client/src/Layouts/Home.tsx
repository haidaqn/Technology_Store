import { Route, Routes } from 'react-router-dom';
import Home from '@/features/home';
import Products from '@/features/home/Products';
import Blog from '@/features/home/Blog';
import Service from '@/features/home/Service';
import Faq from '@/features/home/FAQ';

export function HomeRouter() {
    return (
        <Routes>
            <Route path="" element={<Home />}>
                <Route path="products" element={<Products />} />
                <Route path="blog" element={<Blog />} />
                <Route path="service" element={<Service />} />
                <Route path="faq" element={<Faq />} />
            </Route>
        </Routes>
    );
}
