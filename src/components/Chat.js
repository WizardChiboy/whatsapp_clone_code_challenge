import React from "react";
import "./Chat.css";
import { SearchOutlined, AttachFile, MoreVert } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";

function Chat() {
  return (
    <>
      <div className="chat">
        <div className="chat-header">
          <Avatar />

          <div className="chat-headerInfo">
            <h3> Room Name</h3>
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
          <p className="chat-message">
            <span className="chat-name"> Donmartins </span>
            this is a message
            <span className="chat-timestamp"> {new Date().toUTCString()} </span>
          </p>
          <p className="chat-message chat-reciever">
            <span className="chat-name"> doncodes </span>
            this is a message
            <span className="chat-timestamp"> {new Date().toUTCString()} </span>
          </p>
          <p className="chat-message">
            <span className="chat-name"> Donmartins </span>
            this is a message
            <span className="chat-timestamp"> {new Date().toUTCString()} </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Chat;
