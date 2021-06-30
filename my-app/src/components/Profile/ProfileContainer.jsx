
import Profile from './Profile';

const ProfileContainer = (props) => {
  return ( <Profile image = {props.image}
                    description = {props.description}
                    store = {props.store}/>)
}

export default ProfileContainer;