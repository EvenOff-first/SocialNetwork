import css from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className = {css.Post}>
                <img src= {props.Image} />
                {props.PostMessage}
                <div>Like {props.likes}</div>
            </div>
        </div>
    );
}
export default Post;