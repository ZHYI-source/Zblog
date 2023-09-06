import React, {useState, useEffect} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import {Affix, Avatar, BackTop, Divider, Drawer, Input} from "antd";
import Header from "./moudel/header/header";
import RightBar from "./moudel/rightBar/rightBar";
import MenuList from "../../components/menuList/menuList";
import HeaderSearch from "./moudel/headerSearch/headerSearch";
import './app.scss'
import PrimaryTop from "./moudel/primaryTop/primaryTop";
import Copyright from "../../components/copyright/copyright";
import {Provider} from "react-redux";
import AppAside from "./components/app-aside";
import AppMain from "./components/app-main";
import lazyLoadImages from "../../utils/util.lazyLoad";
import RouterView from "../../router";

const style = {
    height: 30,
    width: 30,
    lineHeight: '30px',
    borderRadius: 4,
    backgroundColor: '#ff0000',
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
};

const App = () => {

    const [backgroundPosition, setBackgroundPosition] = useState('50% 0')

    // 打开全屏
    const openFullscreen = function () {
        const element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }
    const handleScroll = () => {
        const offsetY = window.scrollY;
        setBackgroundPosition(`50% ${(offsetY * 0.02)>95?95:offsetY * 0.02}%`)
    }
    useEffect(() => {
        // 这里可以执行副作用操作，类似于componentDidMount 和 componentDidUpdate
        lazyLoadImages()
        // 给全局window对象添加滚动事件监听器
        window.addEventListener('scroll', handleScroll);
        // 返回一个清理函数，模拟 componentWillUnmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // 空数组表示只在组件挂载和卸载时执行

    return (
        <section className="app">
            <aside className="app-aside">
                <section className="aside-wrap" style={{backgroundPosition: backgroundPosition,}}>
                    <section className="aside-wrap-info">
                        <img className="info-avatar lazy-image"
                             data-src="http://www.zhouyi.run:3089/v1/common/files/preview/img/1691646896442.jpg"/>
                        <p className="info-title">Zblog</p>
                        <p className="info-title-sub">有趣的人记录有趣的事。 </p>
                        <div className="info-icon-list">
                            <i className="iconfont icon-gitee" title="码云"></i>
                            <i className="iconfont icon-github-fill" title="GitHub"></i>
                            <i className="iconfont icon-zhuti_tiaosepan_o" title="更换主题"></i>
                            <i className="iconfont icon-24gl-expand2" title="打开全屏阅读更舒服" onClick={openFullscreen}></i>
                        </div>
                    </section>
                </section>
            </aside>
            <main className="app-main">
                {/*路由内容渲染*/}
                <Outlet/>
            </main>
            <BackTop>
                <div style={style}>TOP</div>
            </BackTop>
        </section>
    );
}


export default App;
