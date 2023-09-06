import React, {useState} from 'react';
import './index.scss'

const PostList = () => {
    const [postData, setPostData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);

    return (
        <>
            <section className="post-box">
                <ul className="menu-list">
                    <li>ALL</li>
                    <li>VUE</li>
                    <li>REACT</li>
                    <li>移动H5</li>
                    <li>小程序</li>
                </ul>
                <section className="post-list">
                    {postData.map((item) => {
                        return (
                            <article className="post-item" key={item}>
                                <header className="blog-header">
                                    <h2>Electron+Vue3+Vite搭建一个桌面应用</h2>
                                    <p>得益于 Vite 卓越的前端开发体验，越来越多的 Electron 项目也开始应用它来构建开发。翻阅各种社区资源可以发现很多基于 Vite 搭建的
                                        Electron
                                        开发模板，但都存在着一些共同的问题</p>
                                    <div className="blog-tip">
                                        <span>2023-09-06 12:30:25 发布</span>
                                        <span><i className="iconfont icon-chakan"></i> 8</span>
                                    </div>
                                </header>
                                <div className="blog-cover">
                                    <img className="lazy-image"
                                         data-src="http://www.zhouyi.run:3089/v1/common/files/preview/img/1691571900783.png"/>
                                </div>
                            </article>
                        )
                    })}
                </section>
            </section>
        </>
    );
};

export default PostList;
