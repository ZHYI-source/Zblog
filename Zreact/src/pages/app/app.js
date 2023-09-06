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
import lazyLoadImages from "../../utils/util.lazyLoad";

const style = {
    height: 30,
    width: 30,
    lineHeight: '30px',
    borderRadius: 4,
    backgroundColor: '#f5f5f5',
    color: '#242424',
    textAlign: 'center',
    fontSize: 12,
};

const App = () => {

    const [backgroundPosition, setBackgroundPosition] = useState('50% 0')
    const [backgroundImage, setBackgroundImage] = useState('url(http://www.zhouyi.run:3089/v1/common/files/preview/img/1691571900783.png)')
    const navigate = useNavigate();

    let currentImageIndex = 1;
    const totalImages = 9;

    function getImageName(index) {
        return index < 10 ? `0${index}` : `${index}`;
    }

    function updateBackgroundImage() {
        setBackgroundImage(`url(http://www.zhouyi.run:3089/v1/common/files/preview/img/${getImageName(currentImageIndex)}.jpg)`);
        currentImageIndex = (currentImageIndex % totalImages) + 1;
    }

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
        setBackgroundPosition(`50% ${(offsetY * 0.02) > 95 ? 95 : offsetY * 0.02}%`)
    }
    useEffect(() => {
        // 这里可以执行副作用操作，类似于componentDidMount 和 componentDidUpdate
        lazyLoadImages()
        // 给全局window对象添加滚动事件监听器
        window.addEventListener('scroll', handleScroll);
        setInterval(updateBackgroundImage, 8000);
        // 返回一个清理函数，模拟 componentWillUnmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // 空数组表示只在组件挂载和卸载时执行

    return (
        <section className="app">
            <aside className="app-aside">
                <section className="aside-wrap"
                         style={{backgroundImage: backgroundImage, backgroundPosition: backgroundPosition,}}>
                    <section className="aside-mask"></section>
                    <section className="aside-wrap-info">
                        <img className="info-avatar lazy-image"
                             data-src="http://www.zhouyi.run:3089/v1/common/files/preview/img/1691548931529.png"/>
                        <p className="info-title">Zblog</p>
                        <p className="info-title-sub">有趣的人记录有趣的事。 </p>
                        <div className="info-icon-list">
                            <i className="iconfont icon-shouye" title="主页" onClick={() => navigate('/')}></i>
                            <a className="iconfont icon-gitee" title="码云" href="https://gitee.com/Z568_568/Zblog"
                               target="_blank"></a>
                            <a className="iconfont icon-github-fill" title="GitHub"
                               href="https://github.com/ZHYI-source" target="_blank"> </a>
                            <i className="iconfont icon-zhuti_tiaosepan_o" title="更换主题"></i>
                            <i className="iconfont icon-24gl-expand2" title="打开全屏阅读更舒服" onClick={openFullscreen}></i>
                        </div>
                    </section>
                    <section className='copyright'>
                        Copyright ©2023 by <a href="https://gitee.com/Z568_568" target="_blank"> @ZHOUYI</a>. All rights
                        reserved.
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
