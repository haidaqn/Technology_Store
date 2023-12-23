import { ThemeProvider } from '@/components/theme-provider';
import { Navigate, Route, Routes } from 'react-router-dom';
import './app.css';
import { NotFound } from './components/common';
import Welcome from './features/welcome';
import { AuthRouter, HomeRouter } from './Layouts';

function App() {
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
