import React from 'react';
import './viewHtml.scss'
const ViewHtml = (props) => {
    return (
        <article className='view-html' dangerouslySetInnerHTML = {{__html:props.content}} >
        </article>
    );
};

export default ViewHtml;
