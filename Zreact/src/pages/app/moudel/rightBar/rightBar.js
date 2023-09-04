import React, {useEffect, useState} from 'react';
import {Affix, Avatar, Input, List} from "antd";
import './rightBar.scss'
import {useSelector} from "react-redux";
import Copyright from "../../../../components/copyright/copyright";

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];
const onSearch = (value) => console.log(value);
const RightBar = () => {
    const [top, setTop] = useState(0);
    let runTimeInterval = useSelector((state) => state.system.runTimeInterval)
    return (
        <section className='right-bar'>
            <Affix offsetTop={top}>
                <div className='search-box'>
                    <Input
                        placeholder="输入博文标题搜索"
                        allowClear
                        style={{
                            height: 40,
                            width: '100%',
                            fontSize: 12
                        }}
                    />
                </div>
            </Affix>
            <div className='right-bar-content'>
                <div className='content-list'>
                    <h2>What’s happening</h2>
                    <div className='list-items'>
                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random"/>}
                                        title={<a href="http://www.zhouyi.run/#/">{item.title}</a>}
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                </div>
                {/*<Affix offsetTop={top}>*/}
                {/*    /!*<div style={{margin:'8px'}}>*!/*/}
                {/*    /!*    /!*<iframe name="weather_inc" title='天气' src="http://i.tianqi.com/?c=code&id=1" width="360" height="25"*!/*!/*/}
                {/*    /!*    /!*        frameBorder="0" marginWidth="0" marginHeight="0" scrolling="no"></iframe>*!/*!/*/}
                {/*    /!*    /!*<iframe width="360" height="90"  title='天气' frameBorder="0" scrolling="no" hspace="0"*!/*!/*/}
                {/*    /!*    /!*        src="https://i.tianqi.com/?c=code&a=getcode&id=7&icon=1"></iframe>*!/*!/*/}
                {/*    /!*    <iframe width="360" height="150" title='天气' frameBorder="0" scrolling="no" hspace="0"*!/*/}
                {/*    /!*            src="https://i.tianqi.com/?c=code&a=getcode&id=21&icon=1"></iframe>*!/*/}
                {/*    /!*</div>*!/*/}

                {/*    <Copyright/>*/}
                {/*</Affix>*/}
            </div>

        </section>
    );
}

export default RightBar;