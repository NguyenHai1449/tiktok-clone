import Iphone from '../pages/Live';
import Ipad from '../pages/Following';

const publicRoutes = [
    {
        path: 'iphone',
        name: 'Iphone',
        component: Iphone,
    },
    {
        path: 'ipad',
        name: 'Ipad',
        component: Ipad,
    },
];

const privateRoutes = [{}];

export { privateRoutes, publicRoutes };
