import React, {useState, useEffect} from 'react';
import {Outlet, useNavigate, useLocation} from "react-router-dom";
import {BackTop} from "antd";
import './app.scss'
import lazyLoadImages from "../../utils/util.lazyLoad";
import Marquee from "react-fast-marquee";

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

// react-route v6 页面切换后回到顶部组件
function ScrollToTop() {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // 滚动到页面顶部
    }, [pathname]);

    return null;
}

const App = () => {
    const [theme, setTheme] = useState({})
    const [themeIndex, setThemeIndex] = useState(0); // 用于跟踪当前主题索引
    const themes = [
        {
            background: '#FFFFFF',
            text: '#333',
            fontFamily: 'Courier New, monospace',
        },
        {
            background: '#E6F7FF',
            text: '#333',
            fontFamily: 'Courier New, monospace',
        },
        {
            background: '#F5F5F5',
            text: '#333',
            fontFamily: 'Georgia, serif',
        },
        {
            background: '#FFFFE0',
            text: '#663300',
            fontFamily: 'Times New Roman, serif',
        },
        {
            background: '#E6FFE6',
            text: '#006600',
            fontFamily: 'Verdana, sans-serif',
        },
        {
            background: '#000',
            text: '#d4d2d2',
            fontFamily: '幼圆',
        },
        {
            background: '#F0E6FF',
            text: '#6600CC',
            fontFamily: 'Arial, sans-serif',
        },
        {
            background: '#FFE6E6',
            text: '#CC0000',
            fontFamily: 'Helvetica, sans-serif',
        },
    ]; // 配置的主题颜色数组
    const [backgroundPosition, setBackgroundPosition] = useState('50% 0')
    const [backgroundImage, setBackgroundImage] = useState('url(https://images.unsplash.com/photo-1693057205719-e439be478b33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1916&q=80)')
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

    const changeTheme = () => {
        // 获取下一个主题颜色
        const nextThemeIndex = (themeIndex + 1) % themes.length;
        const nextTheme = themes[nextThemeIndex];

        // 设置下一个主题颜色
        setTheme(nextTheme);
        setThemeIndex(nextThemeIndex);
    }

    return (
        <section className="app"
                 style={{backgroundColor: theme.background, color: theme.text, fontFamily: theme.fontFamily}}>
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
                            <i className="iconfont icon-zhuti_tiaosepan_o" onClick={changeTheme} title="更换主题"></i>
                            <i className="iconfont icon-24gl-expand2" title="打开全屏阅读更舒服" onClick={openFullscreen}></i>
                        </div>
                    </section>
                    {/*<section className="marquee-scroll">
                        <Marquee>
                            <li>ALL</li>
                            <li>VUE</li>
                            <li>REACT</li>
                            <li>移动H5</li>
                            <li>小程序</li>
                        </Marquee>
                    </section>*/}
                    <section className='copyright'>
                        Copyright ©2023 by <a href="https://gitee.com/Z568_568" target="_blank"> @ZHOUYI</a>. All rights
                        reserved.
                    </section>
                </section>
            </aside>
            <main className="app-main" style={{color: theme.text}}>
                {/*路由内容渲染*/}
                <ScrollToTop/>
                <Outlet/>
            </main>
            <BackTop>
                <div style={style}>TOP</div>
            </BackTop>
        </section>
    );
}


export default App;
