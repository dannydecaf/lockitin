import React from "react";
import Header from "./Header";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import DatingCards from './DatingCards';
import SwipeButtons from "./SwipeButtons";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import "./App.css";

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