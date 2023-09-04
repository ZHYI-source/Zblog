import React, {useState, useEffect} from 'react';

const PostList = () => {
    const {postData, setPostData} = useState([1, 2, 3, 4, 5, 6])
    return (
        <section className="post-list">
            {
                postData.map((item) => {
                    return <div>{item}</div>
                })
            }
        </section>
    )
}
export default PostList;
