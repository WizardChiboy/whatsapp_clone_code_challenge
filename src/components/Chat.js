import React from "react";
import "./Chat.css";
import { SearchOutlined, AttachFile, MoreVert } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import  InsertEmoticon  from "@material-ui/icons/InsertEmoticon";
import  MicIcon  from "@material-ui/icons/Mic"

function Chat() {
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
          <p className="chat-message">
            <span className="chat-name"> Donmartins </span>
            hello doncodes, how are you doing?
            <span className="chat-timestamp"> {new Date().toUTCString()} </span>
          </p>
          <p className="chat-message chat-reciever">
            <span className="chat-name"> doncodes </span>
            hi Don, we are really cool...
            <span className="chat-timestamp"> {new Date().toUTCString()} </span>
          </p>
          <p className="chat-message">
            <span className="chat-name"> Donmartins </span>
            alright, we sure did an awesome build.. kudos
            <span className="chat-timestamp"> {new Date().toUTCString()} </span>
          </p>

          <p className="chat-message chat-reciever">
            <span className="chat-name"> doncodes </span>
            yea...that's a cool stuff indeed...
            <span className="chat-timestamp"> {new Date().toUTCString()} </span>
          </p>
        </div>

        <div className="chat-footer">

          <IconButton>
          <InsertEmoticon/>

          </IconButton>

          <form>
            <input type="text" placeholder="Type a message" />
            <button type="submit"> send your message </button>
          </form>

          <IconButton>
          <MicIcon/>

          </IconButton>


        </div>
      </div>
    </>
  );
}

export default Chat;
