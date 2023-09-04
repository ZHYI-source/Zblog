import React from 'react';
import './selfIntroduction.scss'
const SelfIntroduction = () => {
    return (
        <section className='self-introduction'>
            <blockquote className='self-introduction-b' style={{width:'50%',}}>
                <ul>
                    <li>👋 Hi, I’m @书中枫叶 </li>
                    <li>🚁 欢迎访问我的博客</li>
                    <li>👀 I’m interested in front-end development</li>
                    <li>🌱 I’m currently learning <code style={{color:"blue"}}>React.v18/Node.js/Mysql</code></li>
                    <li>📫 How to reach me <a target='_blank' href='http://www.zhouyi.run/#/'>主页</a></li>
                    <li>🌏 <a target='_blank' href='https://gitee.com/'>Gitee</a></li>
                    <li>🌏 <a target='_blank' href='https://github.com/ZHYI-source'>Github</a></li>
                </ul>
            </blockquote>
        </section>
    );
};

export default SelfIntroduction;