import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
    const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: "Dominika",
      image:
        "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      message: "Yo what's up!",
    },
    {
      message: "Good Thanks! How are you, Dominika?",
    },
  ]);

  const handleSend = e => {
    e.preventDefault();

    setMessages([...messages, { message: input}]);
    setInput("");
  }

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH DOMINIKA ON 23/03/22
        </p>
      {messages.map((message) => (
        message.name ? (
            <div className="chatScreen__message">
            <Avatar
              className="chatScreen_image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : ( 
            <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
            </div>
            )
        ))}

            <form className="chatScreen__input">
                <input
                value={input}
                onChange={e => setInput(e.target.value)}
                className="chatScreen__inputField"
                placeholder="Type a message..."
                type="text" />
                <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
            </form>
        </div>
  );
}

export default ChatScreen;
