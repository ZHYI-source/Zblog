import React, { useState } from 'react';
import './index.scss'
const PostList = () => {
    // Use useState to initialize the state variable postData
    const [postData, setPostData] = useState([1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13]);

    return (
        <section className="post-list">
            {postData.map((item) => {
                return <div className="post-item" key={item}>{item}</div>; // Added a unique key prop
            })}
        </section>
    );
};

export default PostList;
