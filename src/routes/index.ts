import Iphone from '../pages/Iphone';
import Ipad from '../pages/Ipad';
import User from '../pages/User';
import Mac from '../pages/Mac';
import Watch from '../pages/Watch';

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
    {
        path: 'mac',
        name: 'Mac',
        component: Mac,
    },
    {
        path: 'watch',
        name: 'Watch',
        component: Watch,
    },
];

const privateRoutes = [
    {
        path: 'user',
        component: User,
    },
];

export { privateRoutes, publicRoutes };
