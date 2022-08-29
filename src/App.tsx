import { IconContext } from 'react-icons';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Following from './pages/Following';
import Home from './pages/Home';
import Live from './pages/Live';

const App: React.FC = () => {
    return (
        <IconContext.Provider value={{}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DefaultLayout />}>
                        <Route index element={<Home />}></Route>;
                        <Route path="following" element={<Following />}></Route>;
                        <Route path="live" element={<Live />}></Route>;
                    </Route>
                </Routes>
            </BrowserRouter>
        </IconContext.Provider>
    );
};

export default App;
