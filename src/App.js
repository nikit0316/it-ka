import React from 'react';
import './App.modules.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-Wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-Wrapper-Сontent'>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.messagesPage}/>}/>
                    <Route path='/profile'
                           render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost}  updateNewPostText={props.updateNewPostText}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;