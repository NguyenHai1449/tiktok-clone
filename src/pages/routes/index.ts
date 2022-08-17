import Following from '../Following';
import Home from '../Home';
import User from '../User';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: 'following',
        component: Following,
    },
];

const privateRoutes = [
    {
        path: 'user',
        component: User,
    },
];

export { privateRoutes, publicRoutes };
