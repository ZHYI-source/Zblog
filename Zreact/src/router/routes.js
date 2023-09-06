import _import from '../utils/util.import'
import ArticleDetail from "../pages/home/article/articleDetail";

const App = _import('app/app')
const Notice = _import('notice/notice')
const Home = _import('home/home')
const Post = _import('post/index')

const NotFound = _import('404/notFound')

//路由结构表
const mainRoutesList = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true, //默认路由
                element: <Post/>,
                meta: {
                    title: '首页',
                },
            },
            {
                element: <Home/>,
                meta: {
                    title: '首页',
                },
            },
            {   path: '/notice',
                element: <Notice/>,
                meta: {
                    title: '通知',
                    needLogin: true,
                    roleId: 10000,
                },
            },
            {   path: '/articleDetail',
                element: <ArticleDetail/>,
                meta: {
                    title: '文章详情',
                    needLogin: true,
                    roleId: 10000,
                },
            },
        ],
    },
    {
        path: '*',
        element: <NotFound/>,
        meta: {
            title: '404',
            needLogin: true,
            roleId: 10000,
        },
    },

]

export default mainRoutesList;
