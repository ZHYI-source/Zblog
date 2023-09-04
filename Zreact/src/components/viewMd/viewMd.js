import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown' //https://github.com/remarkjs/react-markdown
import rehypeHighlight from 'rehype-highlight' //代码高亮
import remarkGfm from 'remark-gfm' //表格等编译
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import './viewMd.scss'


const ViewMd = (props) => {
    const [articleDetail,setArticleDetail]=useState('')
    const [escapeHtml,setEscapeHtml]=useState(false)
    const markdown = ``
    return (
        <section className='view-md-box'>
            {/*<MarkNav*/}
            {/*    className="article-menu"*/}
            {/*    source={props.md}*/}
            {/*    headingTopOffset={80}*/}
            {/*/>*/}
            <ReactMarkdown
                           className='rendMd'
                           rehypePlugins={[rehypeHighlight,remarkGfm]}
                           children={props.content}
                           >
            </ReactMarkdown>
        </section>
    );
};

export default ViewMd;