
import MyPostsContainer from './MyPosts/MyPostsContainer';
import css from './Profile.module.css';

const Profile = (props) => {
  return (
    <div>
      <div className={css.contentImage}>
        <img src="https://www.pngkey.com/png/full/940-9404361_1200-x-300-1-welcome-to-the-team.png" />
      </div>
      <div className={css.MyProfile}>
        <img src={props.image} />
        <span className={css.Description}>{props.description}</span>
      </div>
      <MyPostsContainer store = {props.store} />;
    </div>
  );
}

export default Profile;