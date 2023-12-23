import { Header, Navbar, Footer } from '@/components/common';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className=" flex flex-col gap-4">
            <Header />
            <div className="px-[10%]">
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
