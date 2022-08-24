import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ToDo from './components/Todo';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import { publicRoutes } from './routes';

const App: React.FC = () => {
    return (
        <div className="container mx-auto">
            <ToDo />
        </div>
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={<DefaultLayout />}>
        //             <Route index element={<Home />}></Route>;
        //             {publicRoutes.map((route, index) => {
        //                 const Page = route.component;
        //                 return <Route key={index} path={route.path} element={<Page />}></Route>;
        //             })}
        //         </Route>
        //     </Routes>
        // </BrowserRouter>
    );
};

export default App;
