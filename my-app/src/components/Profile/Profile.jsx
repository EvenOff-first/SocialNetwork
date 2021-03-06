import state from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import css from './Profile.module.css';

const Profile = (props) => {
  return (
    <div>
      <div className={css.contentImage}>
        <img src="https://www.pngkey.com/png/full/940-9404361_1200-x-300-1-welcome-to-the-team.png" />
      </div>
      <div className = {css.MyProfile}>
        <img src = {props.image}/>
        <span className = {css.Description}>{props.description}</span>
      </div>
      <MyPosts newPostText = {props.profilePage.newPostText} posts = {props.profilePage.posts} dispatch = {props.dispatch} />
    </div>
  );
}

export default Profile;