import React, {useState} from 'react';
import {SearchOutlined} from "@ant-design/icons";
import './headerSearch.scss'
const HeaderSearch = () => {
    const [show,setShow]=useState(true)
    return (
        <div className="header-search">
            {/*<i ></i>*/}
            <SearchOutlined className="iconfont" onClick={()=>{setShow(!show)}}/>
            <input
                className='show'
                placeholder="请输入关键字"
                type="text"
            />
        </div>
    )
}

export default HeaderSearch;