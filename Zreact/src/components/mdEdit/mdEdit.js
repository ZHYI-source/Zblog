import React, {useEffect, useState} from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor, {Plugins} from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import emoji from 'markdown-it-emoji'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css'
// import 'highlight.js/styles/monokai.css'
// Initialize a markdown parser
//https://markdown-it.docschina.org/#%E7%94%A8%E6%B3%95%E7%A4%BA%E4%BE%8B
const mdParser = new MarkdownIt(
    {
        html: true,
        linkify: true,
        typographer: true,
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(lang, str).value
                } catch (__) {
                }
            }
            return '' // use external default escaping
        }
    }
).use(emoji, [{"smile": [":)", ":-)"], "laughing": ":D"}]);
const plugins = [
    'header',
    'font-bold',
    'font-italic',
    'font-underline',
    'font-strikethrough',
    'list-unordered',
    'list-ordered',
    'block-quote',
    'block-wrap',
    'block-code-inline',
    'block-code-block',
    'table',
    'image',
    'link',
    'clear',
    'emoji',
    // 'logger',
    'mode-toggle',
    'full-screen',
    'tab-insert'
];

// Finish!
function handleEditorChange({html, text}) {
    console.log('handleEditorChange', html, text);
}

function renderHTML(text) {
    // 使用 markdown-it
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mdParser.render(text))
        }, 1000)
    })

}

//图片上传
function onImageUpload(file) {
    console.log(file)
    // const reader = new FileReader();
    // reader.onload = data => {
    //     resolve(data.target.result);
    // };
    // reader.readAsDataURL(file);
}

const MdEdit = (props) => {
    const {views} = props
    const [view, setView] = useState({menu: true, md: true, html: false})
    useEffect(() => {
        console.log(views)
         setView(views)
    })
    return (
        <div>
            <MdEditor style={{height: '205px', borderRadius: '5px', overflow: 'hidden'}}
                      plugins={plugins}
                      view={view}
                      placeholder='Please enter your thoughts...'
                      renderHTML={renderHTML}
                      onImageUpload={onImageUpload}
                      onChange={handleEditorChange}/>
        </div>
    )
};

export default MdEdit;
// https://github.com/HarryChen0506/react-markdown-editor-lite/blob/b7f32d3e6be67e2203c0404995a2a6a5d8ad8fd7/docs/configure.zh-CN.md