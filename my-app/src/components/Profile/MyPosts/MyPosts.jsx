import React from 'react';
import { createNewPostElementActionCreator, updateNewPostTextActionCreator } from '../../../redux/profilePageReducer';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let allPosts = props.posts.map(p => {
        return <Post likes={p.likescount} PostMessage={p.message} Image={p.image} />
    });
    let newPostElement = React.createRef();

    let createNewPostElement = () => {

        props.dispatch(createNewPostElementActionCreator());

    }

    let onPostChange = () => {

        let postText = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(postText));

    }
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