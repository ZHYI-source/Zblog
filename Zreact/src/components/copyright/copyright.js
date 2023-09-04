import React from 'react';
import './copyright.scss'
import {useSelector} from "react-redux";
const Copyright = () => {
    let runTimeInterval = useSelector((state) => state.system.runTimeInterval)
    return (
        <section className='copyright'>
            <ul>
                <li style={{listStyleType:'none'}}><h4>资源链接</h4></li>
                <li><a target='_blank' href="https://www.lodashjs.com/">Lodashjs</a></li>
                <li><a target='_blank' href="https://zh-hans.reactjs.org/">React.v18 </a></li>
                <li><a target='_blank' href="https://ant.design/index-cn">Ant.design</a></li>
                <li><a target='_blank' href="https://webpack.js.org/">Webpack</a></li>
            </ul>
            <ul>
                <li style={{listStyleType:'none'}}><h4>系统</h4></li>
                <li>Copyright ©2022 </li>
                <li>by<a target='_blank' href="https://gitee.com/Z568_568"> @书中枫叶 </a>.</li>
                <li> All rights reserved. | <a target='_blank'
                    href="https://beian.miit.gov.cn/#/Integrated/index">黔ICP备2022001745号-1</a></li>
                <li>本站已运行：{runTimeInterval}</li>
            </ul>
        </section>
    );
};

export default Copyright;