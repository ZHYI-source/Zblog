import React, {Suspense} from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import mainRoutesList from "./routes";
import {Loading} from "../components/loading/loading";

const routeAuth = (obj) => {

    return obj.element
}
//处理路由渲染结构
const renderRouter = (routerList) => {
    return routerList.map((item) => {
        // const { path, exact, noAuth, children } = item;
        const token = localStorage.getItem('token')

        // if (!token) return <Route path="*" element={<SonA/>} />;

        //路由拦截
        return <Route
            exact
            key={item.element}
            path={item.path}
            index={item.index}
            // element={item.element}
            element={routeAuth(item)}
        >
            {!!item.children && item.children.map(i => {
                return <Route
                    exact
                    index={i.index}
                    key={i.element}
                    path={i.path}
                    // element={i.element}
                    element={routeAuth(i)}
                />
            })}
        </Route>
    });
};

//路由渲染
const RoutersView = () => {
    return (
        <HashRouter>
            <Suspense fallback={<Loading/>}>
                <Routes>
                    {renderRouter(mainRoutesList)}
                </Routes>
            </Suspense>
        </HashRouter>
    )
}
export default React.memo(RoutersView)
