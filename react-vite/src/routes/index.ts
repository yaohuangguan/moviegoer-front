import Home from '../views';
import Blog from '../views/blog';

export interface IRoute {
    path: string;
    name: string;
    component: React.ReactNode;
    effect: string;
    timeout: number;
    routes?: IArrayRoutes;

};

export interface IArrayRoutes extends Array<IRoute> { }

const routes: IArrayRoutes = [
    {
        path: '/',
        name: '主程',
        component: Home,
        effect: 'none',
        timeout: 0,
        routes: [
            {
                path: '/blog',
                name: '博客',
                component: Blog,
                effect: 'none',
                timeout: 0,
            },
        ],
    },
]

export default routes;