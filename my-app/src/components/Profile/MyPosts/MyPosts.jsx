import React from 'react';

const MyPosts = (props) => {
    let newPostElement = React.createRef();
    let allPosts = props.allPosts;
    let createNewPostElement = () => {props.createNewPostElement(newPostElement)};
    let onPostChange = () => {props.onPostChange(newPostElement)};

    return (
        <div>
            <div>
                <div>My posts</div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <button onClick={createNewPostElement}>New Post</button>
            </div>
            <div>
                {allPosts}
            </div>
        </div>
    );
}

export default MyPosts;