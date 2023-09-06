import React from 'react';
import {Avatar, Button, Comment} from "antd";
import TextArea from "antd/es/input/TextArea";
import './commentReply.scss'
const CommentReply = () => {
    return (
        <div className='comment-reply'>
            <Comment
                actions={[
                    <button className="site-btn" type="submit" >评论</button>
                ]}
                author={<span className="name">ZHOU YI</span>}
                avatar={<Avatar src="http://www.zhouyi.run:3089/v1/common/files/preview/img/1691548931529.png" alt="Han Solo"/>}
                content={
                    <TextArea rows={4}/>
                }
            >
            </Comment>
        </div>
    );
};

export default CommentReply;
