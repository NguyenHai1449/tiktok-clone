import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ToDo from './components/Todo';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import { publicRoutes } from './routes';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route index element={<Home />}></Route>;
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
