import React from 'react';
import {Avatar, Button, Comment} from "antd";
import TextArea from "antd/es/input/TextArea";
import './commentReply.scss'
const CommentReply = () => {
    return (
        <div className='comment-reply'>
            <Comment
                actions={[
                    <Button htmlType="submit" type="primary">评论</Button>
                ]}
                author={<a>Maple</a>}
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo"/>}
                content={
                    <TextArea rows={4}/>
                }
            >
            </Comment>
        </div>
    );
};

export default CommentReply;