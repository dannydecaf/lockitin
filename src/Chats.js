import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Dominika"
        message="Yo what's up!"
        timestamp="5 minutes ago"
        profilePic="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Chat
        name="Danielle"
        message="Hey there 😀"
        timestamp="6 hours ago"
        profilePic="https://images.pexels.com/photos/839633/pexels-photo-839633.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <Chat
        name="Claire"
        message="Well hello 😉"
        timestamp="2 days ago"
        profilePic="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <Chat
        name="Catherine"
        message="Hiya, any weekend plans? 🤗"
        timestamp="1 week ago"
        profilePic="https://images.pexels.com/photos/3387577/pexels-photo-3387577.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
    </div>
  );
}

export default Chats;
