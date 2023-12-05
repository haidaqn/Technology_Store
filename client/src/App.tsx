import { ThemeProvider } from '@/components/theme-provider';
import { Navigate, Route, Routes } from 'react-router-dom';
import './app.css';
import { LoginPage } from './features/auth/pages/LoginPage';
import Welcome from './features/welcome';
import { NotFound } from './components/common';
import HomeRouter from './Layouts/Home';
function App() {
    return (
        <ThemeProvider defaultTheme="light" storageKey="theme">
            <div className="w-screen h-screen relative">
                <Routes>
                    <Route path="/" element={<Navigate to="/welcome" />} />
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/store" element={<HomeRouter />} />
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;
