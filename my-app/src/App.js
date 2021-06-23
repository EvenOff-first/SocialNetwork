import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper" >
        <Header />
        <Navigation />
        <div className="app-wrapper-content" >

          <Route path="/dialogs" render={
            () => <Dialogs 
              dialogs={props.state.messagePage.MessagePage.dialogs}
              messages={props.state.messagePage.MessagePage.messages}
              newMessage = {props.state.messagePage.MessagePage.newMessage} 
              dispatch = {props.dispatch}/>
              } />
          <Route path="/profile" render={ 
            () => <Profile 
            profilePage={props.state.profilePage.ProfilePage}
            dispatch = {props.dispatch}/>
            } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;