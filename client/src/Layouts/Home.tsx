import { Route, Routes } from 'react-router-dom';
import Home from '@/features/home';

export default function HomeRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}
