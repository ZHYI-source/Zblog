import _import from '../utils/util.import'

const App = _import('app/app')
const Post = _import('post/index')
const PostDetail = _import('post/postDetail')
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
                path: '/PostDetail',
                element: <PostDetail/>,
                meta: {
                    title: 'Zblog',
                },
            }
        ],
    },
    {
        path: '*',
        element: <NotFound/>,
        meta: {
            title: '404',
        },
    },

]

export default mainRoutesList;
