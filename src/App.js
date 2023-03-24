import React from "react";
import Header from "./components/Header";
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";
import DatingCards from './components/DatingCards';
import SwipeButtons from "./components/SwipeButtons";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chats/:person">
          <Header backButton="/chats" />
            <ChatScreen />
            </Route>
            <Route path="/chats">
          <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
          <Header />
            <DatingCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;