import React from 'react';
import {Avatar, Comment} from "antd";
import './commentList.scss'
//评论板块
const CommentList = ({ children }) => {
    return (
        <section className='comment-item'>
            <Comment
                author={<a>Han Solo</a>}
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
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