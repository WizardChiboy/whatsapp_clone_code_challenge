import React, { useState } from "react";
import "./Chat.css";
import { SearchOutlined, AttachFile, MoreVert } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import InsertEmoticon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from "../axios";

function Chat({ messages }) {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("/messages/new", {
      message: input,
      name: "Demo Testing",
      timestamp: "just now",
      received: false,
    });

    setInput("");
  };
  return (
    <>
      <div className="chat">
        <div className="chat-header">
          <Avatar />

          <div className="chat-headerInfo">
            <h3> Web Development </h3>
            <p> Last seen at...</p>
          </div>

          <div className="chat-headerRight">
            <IconButton>
              <SearchOutlined />
            </IconButton>

            <IconButton>
              <AttachFile />
            </IconButton>

            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>

        <div className="chat-body">
          {messages.map((message) => {
            return (
              <p
                className={`chat-message ${
                  message.received && "chat-receiver"
                }`}
              >
                <span className="chat-name"> {message.name} </span>
                {message.message}
                <span className="chat-timestamp"> {message.timestamp} </span>
              </p>
            );
          })}
        </div>

        <div className="chat-footer">
          <IconButton>
            <InsertEmoticon />
          </IconButton>

          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Type a message"
            />
            <button onClick={sendMessage} type="submit">
              send your message
            </button>
          </form>

          <IconButton>
            <MicIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default Chat;
