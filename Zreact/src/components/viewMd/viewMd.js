import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown' //https://github.com/remarkjs/react-markdown

import remarkGfm from 'remark-gfm' //表格等编译

import rehypeRaw from 'rehype-raw'// 解析标签，支持html语法
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter' // 代码高亮

//高亮的主题，还有很多别的主题，可以自行选择
import {ghcolors} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import './viewMd.scss'


const ViewMd = (props) => {
    const [articleDetail, setArticleDetail] = useState('')
    const [escapeHtml, setEscapeHtml] = useState(false)
    return (
        <section className='view-md-box'>
            {/*<MarkNav*/}
            {/*    className="article-menu"*/}
            {/*    source={props.md}*/}
            {/*    headingTopOffset={80}*/}
            {/*/>*/}
            <ReactMarkdown
                className='rendMd'
                remarkPlugins={[remarkGfm, {singleTilde: false}]}
                rehypePlugins={[rehypeRaw]}
                children={props.content}
                components={{
                    code({node, inline, className, children, ...props}) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                style={ghcolors}
                                language={match[1]}
                                {...props}
                            />
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        )
                    }
                }}
            >
            </ReactMarkdown>
        </section>
    );
};

export default ViewMd;
