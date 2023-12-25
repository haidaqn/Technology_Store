import { ThemeProvider } from '@/components/theme-provider';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthRouter, HomeRouter } from './Layouts';
import './app.css';
import { NotFound } from './components/common';
import Welcome from './features/welcome';

function App() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <ThemeProvider defaultTheme="light" storageKey="theme">
            <div className="w-screen h-screen relative">
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/auth/*" element={<AuthRouter />} />
                    <Route path="/store/*" element={<HomeRouter />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;
// https://digital-world-2.myshopify.com/
