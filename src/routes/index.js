import Login from '../components/Login/Login';
import configs from '../configs';
import DefaultLayout from '../layouts/DefaultLayout';

const publicRoutes = [
    { path: configs.routes.root, component: DefaultLayout },
    { path: configs.routes.p1, component: DefaultLayout },
    { path: configs.routes.p2, component: DefaultLayout },
    { path: configs.routes.p3, component: DefaultLayout },
    { path: configs.routes.p4, component: DefaultLayout },
    { path: configs.routes.p5, component: DefaultLayout },
    { path: configs.routes.login, component: Login },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
