import App from '../App';
import Home from '../pages/home.tsx';
import About from '../pages/about.tsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path='/' element={<Navigate to={'/home'} />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default baseRouter;