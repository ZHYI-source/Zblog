import React from 'react';
import './commentBoard.scss'
import CommentReply from "./commentReply/commentReply";
import CommentList from "./commentList/commentList";
import {Divider} from "antd";
//评论板块
const CommentBoard = (props) => {
    return (
        <section className='comment-box'>
            <CommentReply/>
            <Divider/>
            <CommentList>
                <CommentList>
                </CommentList>
            </CommentList>
            <CommentList>
            </CommentList>
        </section>
    );
};

export default CommentBoard;