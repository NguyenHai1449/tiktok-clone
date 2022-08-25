import { IconContext } from 'react-icons';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';

const App: React.FC = () => {
    return (
        <IconContext.Provider value={{}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DefaultLayout />}>
                        <Route index element={<Home />}></Route>;
                    </Route>
                </Routes>
            </BrowserRouter>
        </IconContext.Provider>
    );
};

export default App;
