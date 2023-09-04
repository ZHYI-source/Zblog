import React, {useState, useEffect} from 'react';
import './app-aside.scss'
import lazyLoadImages from "../../../utils/util.lazyLoad";


const AppAside = () => {
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

    useEffect(() => {
        // 这里可以执行副作用操作，类似于componentDidMount 和 componentDidUpdate
        lazyLoadImages()
        // 返回一个清理函数，模拟 componentWillUnmount
        return () => {

        };
    });

    return (
        <section className="aside-wrap">
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
    );
}


export default AppAside;
