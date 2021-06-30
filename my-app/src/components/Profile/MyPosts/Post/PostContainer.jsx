import Post from './Post';


const PostContainer = (props) => {
    debugger
    return ( <Post Image = {props.Image}
                    PostMessage = {props.PostMessage}
                    likes = {props.likes}/>);
}
export default PostContainer;