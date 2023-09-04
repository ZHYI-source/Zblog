import React, {Component} from 'react';
import {RichEditor} from "ppfish";
import './Reditor.scss'

/**
 * @author zhouyi
 * @date 2022/6/6 23:26
 * @dec: https://nsfi.github.io/ppfish-components/#/components/richEditor
 */
class RichEdit extends Component {
    constructor(props) {
        super(props);
        this.toolbar = [
            // ['link', 'bold', 'italic', 'underline'], ['color', 'background'], [{'align': ''}, {'align': 'center'}, {'align': 'right'}, {'align': 'justify'}], ['size'], [{'list': 'ordered'}, {'list': 'bullet'}], ['emoji'], ['image'], ['video'], ['strike'], ['blockquote'], ['code-block'], [{'script': 'sub'}, {'script': 'super'}], [{'indent': '-1'}, {'indent': '+1'}], [{direction: "rtl"}], ['clean', 'formatPainter']
            ['link', 'bold','color',{'align': ''}, {'align': 'center'}, {'align': 'right'}, {'align': 'justify'},'size',{'list': 'ordered'}, {'list': 'bullet'},'emoji','image',  'blockquote','code-block',{'indent': '-1'}, {'indent': '+1'},'clean',]
        ];
    }

    render() {
        return (
            <RichEditor
                tooltipPlacement='top'
                className='Reditor'
                resizable
                toolbar={this.toolbar}
            />
        );
    }
}

export default RichEdit;