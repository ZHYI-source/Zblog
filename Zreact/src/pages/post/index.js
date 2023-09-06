import React, {useState} from 'react';
import './index.scss'

const PostList = () => {
    const [postData, setPostData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);

    return (
        <section className="post-list">
            {postData.map((item) => {
                return (
                    <article className="post-item" key={item}>
                        <header className="blog-header" >
                        <h2>测试的</h2>
                        <p>测试的</p>
                        <div className="blog-tip">
                            <span>2023-09-06 12:30:25 发布</span>
                            <span><i class="iconfont icon-chakan2"></i> 8</span>
                            |  <span>5条喜欢</span>
                        </div>
                    </header>
                        <div className="blog-cover">
                            <img className="lazy-image"/>
                        </div>
                    </article>
                )
            })}
        </section>
    );
};

export default PostList;
