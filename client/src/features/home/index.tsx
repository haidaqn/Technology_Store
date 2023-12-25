import { Header, Navbar, Footer } from '@/components/common';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col gap-4 h-screen overflow-y-auto">
            <Header />
            <Navbar />
            <div className="px-left-right py-2">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
