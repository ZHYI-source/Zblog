import React, {useEffect, useState} from 'react';
import ViewMd from "../../../components/viewMd/viewMd";
import './articleDetail.scss'
import {useLocation} from "react-router-dom";
import ViewHtml from "../../../components/viewHtml/viewHtml";
import {Divider, Spin} from "antd";

//文章详情
const ArticleDetail = (props) => {
    const articleData = useLocation()
    const [article, setArticle] = useState({})
    useEffect(() => {
        setArticle(articleData.state.detail)
    }, [])
    return (
        <section className='article-detail-box'>
            <div className='article-detail-header'>
                {article.article_title}
            </div>
            <Divider/>
            <div className='article-detail-body'>
                {
                    article.id ?
                        article.editType === 'mce' ?
                            <ViewHtml content={article.article_content}/> :
                            <ViewMd content={article.article_content}/>
                        :
                        <Spin tip='加载中...' style={{position: "relative", top: '50%', left: '50%'}}/>
                }
            </div>
            <div>

            </div>
            {/*<div className='article-comments'>*/}
            {/*    <CommentBoard/>*/}
            {/*</div>*/}
        </section>
    );
};

export default ArticleDetail;