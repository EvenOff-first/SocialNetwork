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
              dialogs={props.state.MessagePage.dialogs}
              messages={props.state.MessagePage.messages}
              newMessage = {props.state.MessagePage.newMessage} 
              dispatch = {props.dispatch}/>
              } />
          <Route path="/profile" render={ 
            () => <Profile 
            profilePage={props.state.ProfilePage}
            dispatch = {props.dispatch}/>
            } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;