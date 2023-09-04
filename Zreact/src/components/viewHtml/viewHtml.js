import React from 'react';
import './viewHtml.scss'
const ViewHtml = (props) => {
    return (
        <pre>
        <article className='view-html' dangerouslySetInnerHTML = {{__html:props.content}} >

        </article>
        </pre>
    );
};

export default ViewHtml;