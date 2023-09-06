import React, {useState} from 'react';
import './index.scss'
import {Pagination} from 'antd';
import {useNavigate} from "react-router-dom";

const PostList = () => {
    const [postData, setPostData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
    const navigate = useNavigate();

    return (
        <>
            <section className="post-box">
                <section className="search-box">
                    <input placeholder="搜索"/>
                </section>
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
                            <article className="post-item" key={item} onClick={() => navigate('/PostDetail')}>
                                <header className="blog-header">
                                    <h2>不畏将来，看淡得失</h2>
                                    <p>有句话说：“当你独自穿过了暴风雨，你就不是原来的那个人了。”
                                        经过生活历练的人，最终都变成了更强大的自己。
                                        生活中，我们要学会清空情绪、清零往事、清静内心。</p>
                                    <div className="blog-tip">
                                        <span>2023-09-06 12:30:25 发布</span>
                                        <span><i className="iconfont icon-chakan"></i> 8</span>
                                    </div>
                                </header>
                                <div className="blog-cover">
                                    <img className="lazy-image"
                                         alt="cover"
                                         data-src="http://www.zhouyi.run:3089/v1/common/files/preview/img/1691571900783.png"/>
                                </div>
                            </article>
                        )
                    })}
                </section>
                {
                    postData.length > 5 && <section className="pagenation">
                        <Pagination defaultCurrent={1} total={5}/>
                    </section>
                }

            </section>
        </>
    );
};

export default PostList;
