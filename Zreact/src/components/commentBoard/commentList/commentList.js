import React from 'react';
import {Avatar, Comment} from "antd";
import './commentList.scss'
//评论板块
const CommentList = ({ children }) => {
    return (
        <section className='comment-item'>
            <Comment
                author={<span className="name">Han Solo</span>}
                avatar={<Avatar src="http://www.zhouyi.run:3089/v1/common/files/preview/img/1691548931529.png" alt="Han Solo" />}
                content={
                    <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure).
                    </p>
                }
            >
                {children}
            </Comment>

        </section>
    );
};

export default CommentList;
