import React from 'react';
import { createNewPostElementActionCreator, updateNewPostTextActionCreator } from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts';
import PostContainer from './Post/PostContainer';

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let allPosts = state.profilePage.ProfilePage.posts.map(p => {
        return <PostContainer likes={p.likescount} PostMessage={p.message} Image={p.image} />
    });
    

    let createNewPostElement = () => {
        props.store.dispatch(createNewPostElementActionCreator());
    }

    let onPostChange = (newPostElement) => {
        let postText = newPostElement.current.value;
        props.store.dispatch(updateNewPostTextActionCreator(postText));
    }
    return(<MyPosts allPosts = {allPosts}
                    createNewPostElement = {createNewPostElement}
                    onPostChange = {onPostChange}
                    newPostText = {state.profilePage.ProfilePage.newPostText}/>);
}

export default MyPostsContainer;