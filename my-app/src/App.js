import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper" >
        <Header />
        <Navigation />
        <div className="app-wrapper-content" >

          <Route path="/dialogs" render={
            () => <DialogsContainer 
              dialogs={props.state.messagePage.MessagePage.dialogs}
              messages={props.state.messagePage.MessagePage.messages}
              newMessage = {props.state.messagePage.MessagePage.newMessage} 
              dispatch = {props.dispatch}/>
              } />
          <Route path="/profile" render={ 
            () => <ProfileContainer
            store = {props.store}/>
            } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;