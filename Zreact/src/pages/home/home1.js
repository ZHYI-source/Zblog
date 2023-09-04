import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Divider, Popover, Spin} from "antd";
import {CommentOutlined, EyeOutlined, LikeOutlined} from "@ant-design/icons";
import SelfIntroduction from "../../components/selfIntroduction/selfIntroduction";
import {dirArticle} from "../../api/article";
import './home.scss'

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const avt = 'https://joeschmoe.io/api/v1/random'


const Home = () => {

    const [visible, setVisible] = useState(false);
    const navigate = useNavigate()
    const hide = () => {
        setVisible(false);
    };
    const handleVisibleChange = (newVisible) => {
        setVisible(newVisible);
    };

    const goRouter = (path, params) => {
        // navigate(-1)返回上一页
        navigate(path, {state: params})
    }

    const [articles, setArticles] = useState([]);
    const [query, setQuery] = useState({ //查询推荐并且按是否顶置查询
        params: {
            editType: 'md',
        },
        limit: 100,//每页条数
        offset: 1,//当前页
        sort: {
            prop: 'isTop',
            order: 'desc',
        }
    });

    function getDataList() {
        dirArticle(query).then(res => {
            setArticles(res.data);
        })
    }

    useEffect(() => {
        getDataList()
    }, []);


    return (
        <section className='post-list'>
            {/*自我介绍*/}
            <SelfIntroduction/>
            <div className='home-post-class'>
                <h3 className='home-post-h'>🪐 推荐</h3>
            </div>
            <Divider/>

            {
                articles.length > 0 ?
                    articles.map((item) => {
                        return <article className='post-item' key={item.id} onClick={() => {
                            goRouter('/articleDetail', {detail: item})
                        }}>
                            <div className="item-left">
                                <img alt='logo' src={avt}/>
                            </div>
                            <div className='item-body'>
                                <div className='body-header'>
                                    <div>
                                        <span className='author'> @书中枫叶🍁 · </span>
                                        <span className="date">2022-02-25 12:50</span>
                                    </div>
                                    <Popover
                                        content={<div><span onClick={hide}>修改</span><span onClick={hide}>删除</span>
                                        </div>}
                                        placement="topRight"
                                        title='操作'
                                        trigger="click"
                                        visible={visible}
                                        onVisibleChange={handleVisibleChange}
                                    >
                                        <span className="more">···</span>
                                    </Popover>
                                </div>

                                <div className='body-post'>
                                    <div className='post-title'>
                                        {item.article_title}
                                    </div>
                                    <div className='post-content'>
                                        {item.article_summary}
                                    </div>
                                </div>
                                <div className='body-opt'>
                                    <div className='opt-item'>
                                        <CommentOutlined/> {item.commentsCount}
                                    </div>
                                    <div className='opt-item'>
                                        <EyeOutlined/> {item.viewsCount}
                                    </div>
                                    {/*<div className='opt-item'>*/}
                                    {/*    <LikeOutlined/> {item.viewsCount}*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </article>
                        // </NavLink>
                    })
                    :
                    <Spin tip='加载中...' style={{position:"relative",top:'50%',left:'50%'}}/>
            }
        </section>
    );
};

export default Home;
