import { Route, Routes } from 'react-router-dom';
import Home from '@/features/home/Home';

export default function HomeRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}
