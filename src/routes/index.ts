import Following from '../pages/Following';
import Home from '../pages/Home';
import User from '../pages/User';

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
